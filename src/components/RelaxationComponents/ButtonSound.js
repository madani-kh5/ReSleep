import { useState } from "react";

function ButtonSound(props) {
  const [play,setPlay]= useState(false)
  const playSound = () => { 
    setPlay(!play);
    if(!play){
      props.sound.ref.current.play();
    }else{
      props.sound.ref.current.pause();
    }
  }
  return (
    <div>
      <button onClick={playSound} className="relative overflow-hidden flex flex-col items-center justify-center h-32 w-32  m-2 p-2 rounded-xl bg-white text-[#464461] hover:bg-[#fae1dc] text-sm font-semibold">
        {play && <div className="flex justify-center items-center absolute w-full h-full bg-black opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white text-opacity-0 transition duration-150 ease-in-out hover:text-opacity-20 z-50" viewBox="0 0 20 20" fill="white">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
              clipRule="evenodd"
            />
          </svg>
        </div>}
        <img className="h-16 m-4" src={props.sound.image} alt="day" />
        {props.sound.title}
      </button>
      <audio ref={props.sound.ref} loop>
        <source src={props.sound.sound} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default ButtonSound;
