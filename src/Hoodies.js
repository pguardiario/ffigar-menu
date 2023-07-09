// copy([...$$('li.product')].map(div => {
//   return {
//     name: div.innerText,
//     url: div.querySelector('a')?.href,
//     image: div.querySelector('img')?.src
//   }
// }))

let hoodies = [
  {
      "name": "Ysgol Gyfun Penweddig Hwdi Cwdyn Ymadawyr / Leavers Hoodie 2023",
      "url": "https://ffigar.com/item/ysgol-gyfun-penweddig-hwdi-cwdyn-ymadawyr-leavers-hoodie/",
      "image": "https://ffigar.com/wp-content/uploads/2022/04/Penweddig-Leavers-Hoodie-Front-view-single-tone-new-300x300.png"
  },
  {
      "name": "Ysgol Gyfun Penweddig Hwdi Ymadawr Dau Dôn / Two Tone Leavers Hoodie 2023",
      "url": "https://ffigar.com/item/ysgol-penweddig-hwdi-ymadawr-dau-don-two-tone-leavers-hoodie/",
      "image": "https://ffigar.com/wp-content/uploads/2022/04/Penweddig-Leavers-Hoodie-Front-view-two-tone-new-300x300.png"
  },
  {
      "name": "Durston House Leavers 2023 Hoodie",
      "url": "https://ffigar.com/item/durston-house-leavers-hoodie-2023/",
      "image": "https://ffigar.com/wp-content/uploads/2023/04/Durston-House-Leavers-Hoodie-2023-300x300.jpg"
  },
  {
      "name": "YSGOL GYFUN GYMRAEG BRO MYRDDIN HWDI YMADAWR DAU DÔN / TWO TONE LEAVERS HOODIE 2023",
      "url": "https://ffigar.com/item/testst/",
      "image": "https://ffigar.com/wp-content/uploads/2021/03/Ysgol-Gyfun-Gymraeg-Bro-Myrddin-Two-Tone-Hoodie-Front-View-300x300.jpg"
  },
  {
      "name": "YSGOL GYFUN GYMRAEG BRO MYRDDIN HWDI CWDYN YMADAWYR / POUCH LEAVERS HOODIE 2023",
      "url": "https://ffigar.com/item/ysgol-gyfun-bro-myrddin-pouch-leavers-hoodie/",
      "image": "https://ffigar.com/wp-content/uploads/2021/03/Ysgol-Gyfun-Gymraeg-Bro-Myrddin-Pouch-Hoodie-Front-View-300x300.jpg"
  },
  {
      "name": "Ysgol Llanbrynmair Leavers 2023 Hoodie",
      "url": "https://ffigar.com/item/ysgol-llanbrynmair-leavers-2032-hoodie/",
      "image": "https://ffigar.com/wp-content/uploads/2022/05/Ysgol-Llanbrynmair-leavers-hoodies-2022-300x300.png"
  },
  {
      "name": "Ysgol Glantwymyn Leavers 2023 Hoodie",
      "url": "https://ffigar.com/item/ysgol-glantwymyn-leavers-2022-hoodie/",
      "image": "https://ffigar.com/wp-content/uploads/2022/05/Ysgol-Glantwymyn-Leavers-Hoodie-2022-Front-300x300.png"
  }
]

function Hoodies() {
  return <div className="grid grid-cols-6 gap-10 mt-2 mb-6 text-black bg-white shadow-sm shadow-gray-600 p-4 text-sm">


    <div className="text-center font-bold">
      <a href="https://ffigar.com/school-leavers-hoodies/">
        <img className="rounded-lg aspect-square" src="https://res.cloudinary.com/stitch-group/image/upload/c_scale,q_auto:eco,w_500/v1541692827/garment-images/varsity-hoodie-mainphoto.jpg" alt="Create your Own Hoodie" />
        <p>Create your Own School Leavers Hoodie</p>
      </a>
    </div>
    {hoodies.sort((a, b) => a.name.localeCompare(b.name)).map((club, i) => <div className="text-center font-bold">
      <a href={club.url}>
        <img className="rounded-lg" src={club.image || "https://placehold.co/200?text=No%20Image"} alt={club.name} />
        <p>{club.name}</p>
      </a>
    </div>)}

  </div>
}
export default Hoodies

