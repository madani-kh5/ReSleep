import { Fragment, useState } from "react";
import Clock from "../UI/Clock";
import Loading from "../UI/Loading";
import SelectTime from "../UI/SelectTime";

function WakeUpPlan(props) {
  const [sleepTimes, setSleepTimes] = useState([]);
  const [sleepTimesUs, setSleepTimesUs] = useState([]);
  const [loading,setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  let timeNow = new Date();
  let timesToSleep = [];
  let timesToSleepUs = [];

  const getDataTime = (value) => {
    setLoading(true);

    if (value.time === "PM") {
      timeNow.setHours(parseInt(value.hour) + 12);
    } else {
      timeNow.setHours(parseInt(value.hour));
    }
    timeNow.setMinutes(parseInt(value.minute));
    timeNow.setSeconds(0);
    for (let step = 0; step <= 3; step++) {
      if (step === 0) {
        timesToSleep.push(new Date(timeNow.getTime() - 270 * 60000));
      } else {
        timesToSleep.push(
          new Date(timesToSleep[step - 1].getTime() - 90 * 60000)
        );
      }
    }

    timesToSleep = timesToSleep.reverse();

    timesToSleep.forEach((time) => {
      timesToSleepUs.push(
        time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    });
    setSleepTimes(timesToSleep);
    setSleepTimesUs(timesToSleepUs);
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center w-full sm:mb-0 mb-10">
      {loading ? <Loading /> : <div className="flex flex-col items-center">
          {sleepTimes.length === 0 && <SelectTime text="Select your Wakeup time" getDataTime={getDataTime} />}
          {sleepTimes.length !== 0 && <div className="flex flex-col justify-center items-center">
            <div className="text-[#464461] text-lg font-semibold text-center">
              You should try to sleep at one of the following times ...
            </div>
            <div className="flex flex-wrap justify-center sm:w-1/2 w-full">
              {sleepTimes.map((timeClock, index) => {
                return (
                  <Clock
                    key={index}
                    time={timeClock}
                    numericTime={sleepTimesUs[index]}
                  />
                );
              })}
            </div>
          </div>}
          {sleepTimes.length === 0 && <button className="text-[#464461] font-semibold hover:text-red-300" onClick={()=>{props.actionHandler()}}>Back</button>}
          {sleepTimes.length !== 0 && <button className="text-[#464461] font-semibold hover:text-red-300" onClick={()=>{setSleepTimes([])}}>Back</button>}
        </div>}
      </div>
    </Fragment>
  );
}

export default WakeUpPlan;
