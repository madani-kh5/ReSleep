import {Fragment} from "react";
import feather from "../../images/feather.png";

function Clock(props) {
    
  const secondsRatio = props.time.getSeconds() / 60;
  const minutesRatio = (secondsRatio + props.time.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + props.time.getHours()) / 12;

  return (
    <Fragment>
      <div style={{backgroundImage: `url(${feather})`}} className={`relative sm:w-[150px] sm:h-[150px] w-[130px] h-[130px] bg-no-repeat bg-contain bg-center rounded-3xl border-[10px] border-solid bg-[#C8C7AB] border-[#C8C7AB] top-0 left-0 right-0 bottom-0 m-3`}>
        <div className="absolute w-1 h-2 bg-white left-0 right-0 mx-auto"></div>
        <div className="absolute w-2 h-1 bg-white top-0 bottom-0 right-0 m-auto"></div>
        <div className="absolute w-1 h-2 bg-white left-0 right-0 bottom-0 mx-auto"></div>
        <div className="absolute w-2 h-1 bg-white top-0 bottom-0 left-0 m-auto"></div>
        <div className="absolute text-center font-semibold text-white left-0 right-0 sm:bottom-10 bottom-6 mx-auto">{props.numericTime}</div>
        <div className="absolute bg-white h-[35%] w-1 rounded-[10px] bottom-1/2 left-1/2 origin-bottom z-10" style={{transform: `rotate(${parseFloat(hoursRatio*360)}deg`}}></div>
        <div className="absolute bg-white h-[40%] w-[3px] rounded-[10px] bottom-1/2 left-1/2 origin-bottom z-10" style={{transform: `rotate(${parseFloat(minutesRatio*360)}deg`}}></div>
        <div className="absolute bg-red-400 h-[45%] w-[2px] rounded-[10px] bottom-1/2 left-1/2 origin-bottom z-10" style={{transform: `rotate(${parseFloat(secondsRatio*360)}deg`}}></div>
      </div>
    </Fragment>
  );
}

export default Clock;
