// copy([...$$('.et_pb_blurb_content')].map(div => [{
//   name: div.innerText,
//   url: div.querySelector('a')?.href,
//   image: div.querySelector('img')?.src
// }]))

let clubs = [
  {
    "name": "Aber Agrics",
    "url": "https://ffigar.com/aberagrics/",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/aber-agrics-logo.png"
  },
  {
    "name": "Aber Geography Society",
    "url": "https://ffigar.com/abergeogsoc/",
    "image": "https://ffigar.com/wp-content/uploads/2020/07/Aber-Geog-Soc.png"
  },
  {
    "name": "Aber Tennis Club",
    "url": "https://ffigar.com/autc/",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/tennis-society-logo.png"
  },
  {
    "name": "Geltaidd",
    "url": "https://ffigar.com/y-geltaidd/",
    "image": "https://ffigar.com/wp-content/uploads/2022/02/geltaidd-logo.png"
  },
  {
    "name": "AU Cocktail Society",
    "url": "https://ffigar.com/au-cocktail-society/",
    "image": "https://ffigar.com/wp-content/uploads/2022/12/Back-logo-Cocktail-Society.png"
  },
  {
    "name": "Aber Badminton Club",
    "url": "https://ffigar.com/aberbadminton/",
    "image": "https://ffigar.com/wp-content/uploads/2020/07/Aber-Badminton.png"
  },
  {
    "name": "Aber Maths Society",
    "url": "https://ffigar.com/abermathssoc/",
    "image": "https://ffigar.com/wp-content/uploads/2020/12/Math-Soc-Logo.jpg"
  },
  {
    "name": "Aberystwyth Uni Women's Football",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/aber-uni-women-football-logo.png"
  },
  {
    "name": "UMCA",
    "url": "https://ffigar.com/umca/",
    "image": "https://ffigar.com/wp-content/uploads/2022/02/UMCA-Logo.png"
  },
  {
    "name": "AU Law Society",
    "url": "https://ffigar.com/au-law-society/",
    "image": "https://ffigar.com/wp-content/uploads/2022/12/LawSociety_logo-1.png"
  },
  {
    "name": "Aber Business School",
    "url": "https://ffigar.com/abs/",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/Business-school-logo.png"
  },
  {
    "name": "Aber Panthers Street Dancing",
    "url": "https://ffigar.com/aberystwyth-panthers-street-dance/",
    "image": "https://ffigar.com/wp-content/uploads/2021/05/Aberystwyth-Panthers-Street-Dance-category-logo.png"
  },
  {
    "name": "Aberystwyth Uni Men's Football",
    "url": "https://ffigar.com/aberystwyth-universitys-football/",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/aber-uni-women-football-logo.png"
  },
  {
    "name": "Bee Conservation Society",
    "url": "https://ffigar.com/bee-conservation-society/",
    "image": "https://ffigar.com/wp-content/uploads/2022/02/logo.png"
  },
  {
    "name": "Aber Car Enthusiasts",
    "url": "https://ffigar.com/ace/",
    "image": "https://ffigar.com/wp-content/uploads/2020/09/ACE-Aber-Car-Enthusiasts-logo.jpg"
  },
  {
    "name": "Aber Pirate Society",
    "url": "https://ffigar.com/aberystwyth-university-pirate-society/",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/pirate-society-logo.png"
  },
  {
    "name": "Aberystwyth Uni Sailing Club",
    "url": "https://ffigar.com/aberystwyth-university-sailing-club/",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/sailing-club-logo.png"
  },
  {
    "name": "Aber Uni Snow",
    "url": "https://ffigar.com/aber-uni-snow/",
    "image": "https://ffigar.com/wp-content/uploads/2022/03/aber-snow-lgoo.png"
  },
  {
    "name": "Aber Comp Society",
    "url": "https://ffigar.com/abercompsoc/",
    "image": "https://ffigar.com/wp-content/uploads/2020/07/Aber-Comp-Soc.png"
  },
  {
    "name": "Aber SU",
    "url": "https://ffigar.com/abersu/",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/AU-logo.png"
  },
  {
    "name": "Aberystwyth Uni Swimming & Waterpolo",
    "url": "https://ffigar.com/aberystwyth-swimming-waterpolo/",
    "image": "https://ffigar.com/wp-content/uploads/2021/12/Aber-swimming-and-waterpolo-logo.png"
  },
  {
    "name": "Aber Uni Geography and Earth science",
    "url": "https://ffigar.com/aberystwyth-university-geography-and-earth-science/",
    "image": "https://ffigar.com/wp-content/uploads/2022/03/Logo.png"
  },
  {
    "name": "Aber Debating Society",
    "url": "https://ffigar.com/aberystwyth-debating-society/",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/Debating-society-logo.png"
  },
  {
    "name": "Tarannau Cheerleaders",
    "url": "https://ffigar.com/tarannau-cheerleaders/",
    "image": "https://ffigar.com/wp-content/uploads/2021/11/taranau-cheerleaders.png"
  },
  {
    "name": "Aberystwyth Uni Netball Club",
    "url": "https://ffigar.com/aberystwyth-university-netball/",
    "image": "https://ffigar.com/wp-content/uploads/2022/02/AUNC.png"
  },
  {
    "name": "Aber Uni Boat Club",
    "url": "https://ffigar.com/aberystwyth-university-boat-club/",
    "image": "https://ffigar.com/wp-content/uploads/2022/03/aber-uni-boat-club-logo.png"
  }

]

function Universities() {
  return <div className="grid grid-cols-6 gap-10 mt-2 mb-6 text-black bg-white shadow-sm shadow-gray-600 p-4 text-sm">
    {clubs.sort((a, b) => a.name.localeCompare(b.name)).map((club, i) => <div className="text-center font-bold">
      <a href={club.url}>
        <img className="rounded-lg" src={club.image || "https://placehold.co/200?text=No%20Image"} alt={club.name} />
        <p>{club.name}</p>
      </a>
    </div>)}

  </div>
}
export default Universities

