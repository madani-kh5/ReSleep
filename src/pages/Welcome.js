import { Link } from "react-router-dom";
import background from "../images/background-welcome.png"
function Welcome() {
  return (
    <div style={{backgroundImage: `url(${background})`}} className="min-h-screen bg-no-repeat bg-center">
      <div className="flex flex-col h-screen justify-center items-center text-center text-[#464461] w-full">
        <div className="sm:text-5xl text-4xl font-extrabold w-2/3 sm:w-1/4 p-2">Sleep Relaxed And Enough</div>
        <div className="text-xl font-bold w-3/4 sm:w-1/3 mx-auto p-2">Our site allows you to get enough sleep which leads to incredible productivity</div>
        <div className="flex flex-col justify-center items-center sm:hidden font-bold text-[#464461]">
          <Link to="/Sleepcycles" className=" block px-6 py-2 m-1 bg-[#C8C7AB] hover:bg-[#adac95] rounded-lg">Sleep Cycles</Link>
          <Link  to="/relaxation" className="block px-3 py-2 m-1 bg-[#C8C7AB] hover:bg-[#adac95] rounded-lg">Relaxation Sounds</Link> 
        </div>
      </div>
    </div>
  );
}
export default Welcome;
