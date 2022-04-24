import { Fragment, useState } from "react";
import Clock from "../UI/Clock";
import Loading from "../UI/Loading";
import SelectTime from "../UI/SelectTime";

function SleepPlan(props) {
  const [wakeupTimes, setwakeupTimes] = useState([]);
  const [wakeupTimesUs, setwakeupTimesUs] = useState([]);
  const [loading,setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  let timeNow = new Date();
  let timesToWakeup = [];
  let timesToWakeupUs = [];

  const getDataTime = (value) => {
    setLoading(true);

    if (value.time === "PM") {
      timeNow.setHours(parseInt(value.hour) + 12);
    } else {
      timeNow.setHours(parseInt(value.hour));
    }
    timeNow.setMinutes(parseInt(value.minute));
    timeNow.setSeconds(0);
    for (let step = 0; step <= 5; step++) {
      if (step === 0) {
        timesToWakeup.push(new Date(timeNow.getTime() + 90 * 60000));
      } else {
        timesToWakeup.push(
          new Date(timesToWakeup[step - 1].getTime() + 90 * 60000)
        );
      }
    }

    timesToWakeup.forEach((time) => {
      timesToWakeupUs.push(
        time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    });
    setwakeupTimes(timesToWakeup);
    setwakeupTimesUs(timesToWakeupUs);
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center w-full sm:mb-0 mb-10">
        {loading ? <Loading /> : <div className="flex flex-col items-center">
          {wakeupTimes.length === 0 && <SelectTime text="Select your Sleep time" getDataTime={getDataTime} />}
          {wakeupTimes.length !== 0 && <div className="flex flex-col justify-center items-center">
            <div className="text-[#464461] text-lg font-semibold text-center">
              You should try to wake up at one of the following times ...
            </div>
            <div className="flex flex-wrap justify-center sm:w-1/2 w-full">
              {wakeupTimes.map((timeClock, index) => {
                return (
                  <Clock
                    key={index}
                    time={timeClock}
                    numericTime={wakeupTimesUs[index]}
                  />
                );
              })}
            </div>
          </div>}
          {wakeupTimes.length === 0 && <button className="text-[#464461] font-semibold hover:text-red-300" onClick={()=>{props.actionHandler()}}>Back</button>}
          {wakeupTimes.length !== 0 && <button className="text-[#464461] font-semibold hover:text-red-300" onClick={()=>{setwakeupTimes([])}}>Back</button>}
        </div>}
      </div>
    </Fragment>
  );
}

export default SleepPlan;
