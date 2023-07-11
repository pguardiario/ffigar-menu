const puppeteer = require("puppeteer")
const cheerio = require("cheerio")
const { load, save } = require("./utils")
const colors = require("./colors")
const fs = require('fs')

function getColor(s){
  let c = colors.find(c => c.toLowerCase() === s.toLowerCase())
  if(c) return c
  c = colors.find(c => c.toLowerCase().includes(s.toLowerCase()))
  if(c) return c
  c = colors.find(c => s.toLowerCase().includes(c.toLowerCase()))
  if(c) return c
}

function getBrand(s){
  let match = s.match(/Nike|Adidas|Joma|Stanno|Hummel|Puma/i)
  return match ? match[0] : ""
}

function getType(s){
  switch(true){
    case !!s.match(/base layer/i): return "Base Layers"
    case !!s.match(/women/i): return "Womens"
    case !!s.match(/sock/i): return "Socks"
    case !!s.match(/short|pant/i): return "Shorts"
    case !!s.match(/shirt|jersey/i): return "Shirts"
    case !!s.match(/\bsets?\b/i): return "Sts"
    default: return "Kits"
  }
}

let c = getColor("persian violet")



const skuify = (name) => name.trim().replace(/\W+/g, '-').replace(/^-|-$/g, '').toUpperCase()

let browser, page

async function getPage(url) {
  if (!browser) {
    browser = await puppeteer.launch({
        headless: false
    })
    page = await browser.newPage()
  }
  page.goto(url)
  await page.waitForNavigation()
  await page.waitForSelector('td.size')
  await page.evaluate(() => {
    for (let td of document.querySelectorAll('td[colspan]')) {
      let cols = Number(td.getAttribute('colspan'))
      for (let i = 0; i < cols; i++) {
        const newTd = document.createElement("td")
        const node = document.createTextNode(td.innerText)
        newTd.appendChild(node);
        td.after(newTd)
      }
      td.remove()
    }

    for (let td of document.querySelectorAll('td[rowspan="2"]')) {
      td.setAttribute('rowspan', '1')
      td = td.closest('tr').nextElementSibling.querySelector('td')
      td.before(document.createElement("td"))

    }

  })
  let html = await page.content()
  return cheerio.load(html)
}

let parent, variation

async function getVariations(url, product) {
  let $ = await getPage(url)
  let color = getColor($('.prod-txtsize').text())
  let vars = []
  $('[id*=ajxRelateOrderPanelId]').remove()
  let images = $('[data-target="#myCarousel"] img').get().map(img => {
    let image = new URL($(img).attr('src'), url).href
    let src = $(img).attr('src')
    let match = src.match(/[\w-]+.jpg/)
    if(match){
      let fn = match[0]
      if(!fs.existsSync(`images/${fn}`)){
        fetch(image).then(r => r.arrayBuffer()).then((ab) => {
          fs.writeFileSync(`images/${fn}`, Buffer.from(ab))
        })
      }
      return "http://192.236.233.221/images/" + fn
    }
  }).filter(s => s)


  // images = images.map(image => {
  //   let fn = image.match(/[\w]+.jpg/)[0]
  //   return
  // }).filter(x => !x.match('.jpg.jpg'))

  let tables = $('table:has(> tbody > tr > td.size)').get()
  for (let table of tables) {
    numCols = $(table).find('tr:nth-child(1)').find('td').length
    for (let i = 0; i < numCols; i++) {
      let css = `td:nth-child(${i + 1})`
      let [size1, size2, rrp, discount, qty, stock] = $(table).find(css).get().map(x => $(x).text().trim())
      rrp = rrp.replace('£', '')
      discount = discount.replace('£', '')
      if (rrp !== "RRP") {
        vars.push({ size1, size2, rrp, discount, qty, stock })
      }
    }
  }
  let ret = []

  for(let age of ["Youth", "Adult"]){

    for (let v of vars) {
      if (images[0] && !product.Images) {
        product.Images = images[0]
      }

      let attr1 = v.size1.includes('Youth') ? "Youth" : "Adult"
      if(attr1 !== age) continue
      let match = v.size2.match(/^[\dXLS]+/)
      let attr2 = match ? match[0] : (v.size2 || "s")[0]

      let uri = product["Custom URI"] + `-${attr1}-${attr2}`.toLowerCase()
      let name = product["Name"] + ' - ' + [attr1, attr2, color].join(', ')

      let newVariation = {
        ...variation,
        "Attribute 1 value(s)": age, // Youth or Adult or KidsMen
        "Attribute 2 value(s)": v.size2, //size
        "Attribute 3 value(s)": color, //color
        "Custom URI": uri, // -s-adult
        "ID": "",
        "Images": images.join(', '),
        "In stock?": "1",
        "Name": name, // "Stanno Field SS Shirt - Adult, S, Black"
        "Parent": product.SKU,
        "Regular price": v.rrp,
      }
      ret.push(newVariation)

    }
  }

  return ret

}



async function doItem(item) {
  let html = await fetch(item.url).then(r => r.text())
  let $ = cheerio.load(html)

  parent.Categories
  let brand = getBrand(item.name)
  let type = getType(item.name)
  let categories = `Shop > ${type} Kits, Shop > ${type} Kits > ${brand}, Shop > ${type} Kits > ${brand} > ${brand} ${type}`
  let description = $('.text-left > p').html()?.split("<br>").pop() || ""
  let product = {
    ...parent,
    ID: "",
    Name: item.name,
    SKU: skuify(item.name),
    Published: "1",
    Categories: categories,
    "Custom URI": skuify(item.name).toLowerCase(),
    "Brand": brand,
    "Attribute 1 value(s)": brand,
    Description: description,
    Images: "",
    "Short description": description,
    "Stock": "1",
    "Tags": "football",
  }

  // debugger
  let variations = []
  for (let a of $('.t-shrt ul li a').get()) {
    let url = new URL($(a).attr('href'), item.url).href
    variations = [...variations, ...await getVariations(url, product)]
  }
  product["Attribute 5 value(s)"] = [...new Set(variations.map(v => v["Attribute 1 value(s)"]))].join(', ')
  product["Attribute 6 value(s)"] = [...new Set(variations.map(v => v["Attribute 2 value(s)"]))].join(', ')
  product["Attribute 7 value(s)"] = [...new Set(variations.map(v => v["Attribute 3 value(s)"]))].join(', ')

  product["Images"] = [...new Set(variations.map(v => v["Images"].split(', ')).flat())].join(', ')

  save(product)
  for(let v of variations){
    save(v)
  }

  // debugger
}

const type = "Footbal"

async function run() {
  let rows = await load("./scripts/x.csv")
  parent = rows.find(row => row.Type === "variable")
  variation = rows.find(row => row.Type === "variation")
  for(let url of [
    // "https://www.discountfootballkits.com/Nike_Goalkeeper_Kits",
    // "https://www.discountfootballkits.com/Adidas_Goalkeeper_Kits",
    // "https://www.discountfootballkits.com/Stanno_Goalkeeper_Kits",
    // "https://www.discountfootballkits.com/puma-goalkeeper-kits",
    // "https://www.discountfootballkits.com/joma-goalkeeper-kits"
    "https://www.discountfootballkits.com/Stanno_Football_Kits",
    "https://www.discountfootballkits.com/joma-football-kits",
  ]){
    let html = await fetch(url).then(r => r.text())
    let $ = cheerio.load(html)

    for (let div of $('[class="col-lg-3 col-xs-6 col-sm-4"]').get()) {
      let item = {
        url: new URL($(div).find('a[title]').first().attr('href'), url).href,
        name: $(div).find('p').first().text(),
      }
      await doItem(item)
      // debugger
    }
  }



  browser.close()
}

run()



// https://ffigar.com/joma-goalkeeper-kit/
// https://ffigar.com/stanno-goalkeeper-kit/