import { Fragment, useState } from "react";
import Select from "./Select";

function SelectTime(props) {
  const hours = [];
  const minutes = [];
  const am_pm = ["AM", "PM"];

  for (let i = 1; i <= 12; i++) {
    hours.push(i);
  }
  for (let j = 0; j <= 59; j++) {
    minutes.push(j);
  }

  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [time, setTime] = useState();

  const hourHandler = (hour) => {
    setHour(hour.target.value);
  };

  const minuteHandler = (minute) => {
    setMinute(minute.target.value);
  };

  const ampmHandler = (time) => {
    setTime(time.target.value);
  };

  const passTimeHandler = (data) => {
    if (hour !== undefined && minute !== undefined && time !== undefined) {
      props.getDataTime(data);
    } else {
      alert("Please complete all fields");
    }
  };

  return (
    <Fragment>
      <div className="flex flex-col">
        <div className="w-full text-center text-[#464461] font-semibold">{props.text}</div>
        <div className="flex sm:flex-row flex-col justify-center items-center">
          <Select name={"Hour"} data={hours} getData={hourHandler} />
          <div className="sm:w-3 w-0"></div>
          <Select name={"Minute"} data={minutes} getData={minuteHandler} />
          <div className="sm:w-3 w-0"></div>
          <Select name={"AM-PM"} data={am_pm} getData={ampmHandler} />
        </div>
        <button
          className="my-2 px-6 py-3 w-full bg-[#C8C7AB] hover:bg-[#adac95] font-semibold text-white text-sm rounded-lg"
          onClick={() => {
            passTimeHandler({ hour, minute, time });
          }}
        >
          Calculate
        </button>
      </div>
    </Fragment>
  );
}

export default SelectTime;
