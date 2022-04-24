import { useState } from "react";
import Clock from "../UI/Clock";
import Loading from "../UI/Loading";

function WakeUpSleepNow(props) {
  const [loading,setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  let timeNow = new Date();
  let timesToWakeUp = [];
  for (let step = 0; step <= 5; step++) {
    if (step === 0) {
      timesToWakeUp.push(new Date(timeNow.getTime() + 105 * 60000));
    } else {
      timesToWakeUp.push(
        new Date(timesToWakeUp[step - 1].getTime() + 90 * 60000)
      );
    }
  }

  let timesToWakeUpUs = [];
  timesToWakeUp.forEach((time) => {
    timesToWakeUpUs.push(
      time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  });

  return (
    <div className="flex flex-col justify-center items-center sm:mb-0 mb-10">
      {loading ? <Loading /> : <div className="flex flex-col items-center">
        <div className="text-[#464461] text-lg font-semibold text-center">
          If I sleep now, I have to wake up at...
        </div>
        <div className="flex flex-wrap justify-center sm:w-1/2 w-full">
          {timesToWakeUp.map((timeClock, index) => {
            return (
              <Clock
                key={index}
                time={timeClock}
                numericTime={timesToWakeUpUs[index]}
              />
            );
          })}
        </div>
        <button className="text-[#464461] font-semibold hover:text-red-300" onClick={()=>{props.actionHandler()}}>
          Back
        </button>
      </div>}
    </div>
  );
}

export default WakeUpSleepNow;
