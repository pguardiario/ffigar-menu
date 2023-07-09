let clubs = [
  {
    name: "Aberystwyth Town (ATFC) Academy",
    image: "",
    url: "https://ffigar.com/atfcacademy/",
  },
  {
    name: "Aberystwyth Town Women FC",
    image: "",
    url: "https://ffigar.com/aberystwyth-women-football/",
  },
  {
    name: "CFFI Llangwyryfon",
    image: "",
    url: "https://ffigar.com/cffi-llangwyryfon/",
  },
  {
    name: "Harp Rovers AFC",
    image: "",
    url: "https://ffigar.com/harp-rovers-afc/",
  },
  {
    name: "Lampeter AFC",
    image: "",
    url: "https://ffigar.com/lampeter-afc/",
  },
  {
    name: "Machynlleth FC Club Shop",
    image: "",
    url: "https://ffigar.com/machynlleth-fc-club-shop/",
  },
  {
    name: "PF 1-2-1",
    image: "",
    url: "https://ffigar.com/thepf1-2-1/",
  },
  {
    name: "Rhos FC Club Shop",
    image: "",
    url: "https://ffigar.com/club-shops/rhos-fc-club-shop/",
  },
  {
    name: "Welshpool FC",
    image: "",
    url: "https://ffigar.com/welshpool-fc/",
  },
  {
    name: "Whittington &amp; Oswestry YFC",
    image: "https://ffigar.com/wp-content/uploads/2022/01/Oswestry-YFC.png",
    url: "https://ffigar.com/whittington-oswestry-yfc/",
  },
  {
    name: "Pontardawe FC",
    image: "https://ffigar.com/wp-content/uploads/2021/08/Pontardawe-Town-FC.png",
    url: "https://ffigar.com/store/footballclubstore/pontardawetownfc/",
  },
  {
    name: "Penrhyncoch FC Juniors",
    image: "https://ffigar.com/wp-content/uploads/2022/03/logo-1.png",
    url: "https://ffigar.com/penrhyn-coch-f-c/",
  },
  {
    name: "Llanidloes FC",
    image: "https://ffigar.com/wp-content/uploads/2021/02/Llanidloes-Town-Football-Club-Logo.png",
    url: "https://ffigar.com/llanidloes-fc/",
  },
  {
    name: "Llandysul FC",
    image: "https://ffigar.com/wp-content/uploads/2021/11/Llandysul-FC-Logo.png",
    url: "https://ffigar.com/llandysul-fc/",
  },
  {
    name: "Aberystwyth Football CLub",
    image: "https://ffigar.com/wp-content/uploads/2020/09/Aberystwyth_Town_FC.png",
    url: "https://ffigar.com/aberunifc-men/",
  },
  {
    name: "Aberystwyth Girls Development",
    image: "https://ffigar.com/wp-content/uploads/2020/09/Aberystwyth_Town_FC.png",
    url: "https://ffigar.com/atfcgirlsdevelopmentcentre/",
  },
  {
    name: "Dyfed Dirt Bike Club",
    image: "https://ffigar.com/wp-content/uploads/2022/02/DDBC-logo.png",
    url: "https://ffigar.com/dyfed-dirt-bike/",
  },
  {
    name: "CPD Bow Street FC",
    image: "https://ffigar.com/wp-content/uploads/2021/05/CPD-Bow-Street-FC-canva-logo.png",
    url: "https://ffigar.com/bowstreet/",
  },
  {
    name: "Ceredigion Schools",
    image: "https://ffigar.com/wp-content/uploads/2021/07/Logo-CPDYC-1-1.png",
    url: "https://ffigar.com/ceredigionschools/",
  },
  {
    name: "CPD Felinfach FC",
    image: "https://ffigar.com/wp-content/uploads/2020/08/Felinfach-Logo.jpg",
    url: "https://ffigar.com/felinfach/",
  },
  {
    name: "Maesglas FC",
    image: "https://ffigar.com/wp-content/uploads/2020/07/Maesglas-FC.png",
    url: "https://ffigar.com/maesglas/",
  },
  {
    name: "Clwb Rhedeg Aberystwyth Running Club",
    image: "https://ffigar.com/wp-content/uploads/2021/11/Aber-AC-Logo.png",
    url: "https://ffigar.com/clwb-rhedeg-aberystwyth-running-club/",
  },
  {
    name: "AFC Whitchurch",
    image: "https://ffigar.com/wp-content/uploads/2020/07/Whitchurch-AFC.png",
    url: "https://ffigar.com/afcwhitchurch/",
  },
  {
    name: "AFC Whitchurch Ladies",
    image: "https://ffigar.com/wp-content/uploads/2020/07/Whitchurch-AFC.png",
    url: "https://ffigar.com/afc-whitchurch-ladies/",
  }
]


function ClubShops() {
  return <div className="grid grid-cols-6 gap-10 mt-2 mb-6 text-black bg-white shadow-sm shadow-gray-600 p-4">
    {clubs.sort((a,b) => a.name.localeCompare(b.name)).map((club, i) => <div className="text-center font-bold">
      <a href={club.url}>
        <img className="rounded-lg" src={club.image || "https://placehold.co/200?text=No%20Image"} alt={club.name} />
        <p>{club.name}</p>
      </a>
    </div>)}

  </div>
}
export default ClubShops

