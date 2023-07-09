'./App.css';
import { useState } from 'react';
import FootballKits from './FootballKits';
import GoalkeeperKits from './GoalkeeperKits';
import Trainingwear from './Trainingwear';
import ClubShops from './ClubShops';

function Search() {
  return <div className="flex">
    <div className="flex-1"></div>
    <div className="bg-green-500 p-2 text-black space-x-2">
      <form action="/search">
        <input type="text" name="q" className="rounded text-lg p-1 pl-4 m-0 mr-2" placeholder="search" />
        {/* <button>🔍</button> */}
      </form>
    </div>

  </div>
}

function App() {
  const [menu, setMenu2] = useState()

  function setMenu(m) {
    clearTimeout(window.menuTimeout)
    window.menuTimeout = setTimeout(() => setMenu2(m), 100)
  }

  return <header className="text-white">
    <div className="bg-[#222a2d] py-12 flex justify-center">
      <img src="https://ffigar.com/wp-content/uploads/2021/12/FfigarLogoOriginalWhite.png" className="w-3/4" />
    </div>
    <div className="w-full bg-green-600 text-white text-sm md:flex justify-center space-x-2 font-bold">
      <button onMouseEnter={() => setMenu("footballKits")} onMouseLeave={() => setMenu()} className={`${menu === "footballKits" ? "bg-green-400" : ""} py-1 p-2`}>
        <p>Football Kits</p>
      </button>
      <button onMouseEnter={() => setMenu("goalkeeperKits")} onMouseLeave={() => setMenu()} className={`${menu === "goalkeeperKits" ? "bg-green-400" : ""} py-1 p-2`}>
        <p>Goalkeeper Kits</p>
      </button>
      <button onMouseEnter={() => setMenu("trainingwear")} onMouseLeave={() => setMenu()} className={`${menu === "trainingwear" ? "bg-green-400" : ""} py-1 p-2`}>
        <p>Trainingwear</p>
      </button>

      <button onMouseEnter={() => setMenu("clubShops")} onMouseLeave={() => setMenu()} className={`${menu === "clubShops" ? "bg-green-400" : ""} py-1 p-2`}>
        <p>Club Shops</p>
      </button>

      <a href="https://ffigar.com/all-school-shops/" className="py-1 p-2">
        <p>Schools</p>
      </a>



      {[
        "Footballs",
        "Accessories",
        "Goals & Nets",
        "Referee",
        "Bags",
        "Trophies",
        "Clearance"
      ].map((key, i) => <button onClick={() => setMenu("")} key={i} className=" py-1 p-2">
        <p>{key}</p>
      </button>)}
      <button onMouseEnter={() => setMenu("search")} onMouseLeave={() => setMenu()} className={`${menu === "search" ? "bg-green-400" : ""} py-1 p-2`}>
        <p>Search</p>
      </button>

    </div>
    <div className="max-w-6xl m-auto relative">
      <div className="absolute w-full z-50">
        {menu === "footballKits" && <div onMouseEnter={() => setMenu("footballKits")} onMouseLeave={() => setMenu()} className="">
          <FootballKits />
        </div>}
        {menu === "goalkeeperKits" && <div onMouseEnter={() => setMenu("goalkeeperKits")} onMouseLeave={() => setMenu()} className="">
          <GoalkeeperKits />
        </div>}
        {menu === "trainingwear" && <div onMouseEnter={() => setMenu("trainingwear")} onMouseLeave={() => setMenu()} className="">
          <Trainingwear />
        </div>}
        {menu === "clubShops" && <div onMouseEnter={() => setMenu("clubShops")} onMouseLeave={() => setMenu()} className="">
          <ClubShops/>
        </div>}
        {menu === "search" && <div onMouseEnter={() => setMenu("search")} onMouseLeave={() => setMenu()} className="">
          <Search />
        </div>}

      </div>
    </div>
  </header>

}

export default App;