import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


function MainNavigation() {
  const [drop,setDrop] = useState(false);

  return (
    <header className="fixed flex w-full p-6 z-50 sm:bg-transparent bg-[#FAF5F2]">
      <nav className="sm:flex sm:justify-around justify-between items-center w-full">
        <Link to="/" className="text-xl font-semibold text-[#464461]">
          ReSleep
        </Link>
        <ul className="sm:flex hidden items-center">
          <li>
            <NavLink
              to="/Sleepcycles"
              className={(navData) => navData.isActive ? "bg-white rounded-lg text-[#464461] font-bold py-3 px-7 m-1" : "text-[#464461] font-bold py-3 px-7 m-1" }
            >
              Sleep Cycles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/relaxation"
              className={(navData) => navData.isActive ? "bg-white rounded-lg text-[#464461] font-bold p-3 m-1" : "text-[#464461] font-bold p-3 m-1" }
            >
              Relaxation Sounds
            </NavLink>
          </li>
        </ul>
        <Link to="/contact" className= "sm:block hidden text-[#464461] font-bold">
          Contact
        </Link>
      </nav>
      
      <button onClick={()=>setDrop(true)} className="sm:hidden block">
        <svg className="h-6 w-6 text-[#464461]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      {drop && 
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right text-[#464461] md:hidden">
          <nav className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
            <Link onClick={()=>setDrop(false)} to="/" className="text-xl font-semibold text-[#464461]">ReSleep</Link>
              <div className="-mr-2">
                <button onClick={()=>setDrop(false)} className=" bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1 text-base font-medium">
              <Link onClick={()=>setDrop(false)} to="/Sleepcycles" className=" block px-3 py-2 hover:bg-gray-50">Sleep Cycles</Link>
              <Link onClick={()=>setDrop(false)} to="/relaxation" className="block px-3 py-2 hover:bg-gray-50 ">Relaxation Sounds</Link> 
              <Link onClick={()=>setDrop(false)} to="/contact" className="block px-3 py-2 hover:bg-gray-50 ">Contact</Link>   
            </div>
          </nav>
        </div>
      }
    </header>
  );
}

export default MainNavigation;
