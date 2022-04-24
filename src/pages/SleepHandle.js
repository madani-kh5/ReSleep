import { useState } from "react";
import ChooseAction from "../components/SleepComponents/ChooseAction";
import ClockNow from "../components/SleepComponents/ClockNow";
import WakeUpSleepNow from "../components/SleepComponents/WakeUpSleepNow";
import WakeUpPlan from "../components/SleepComponents/WakeUpPlan";
import SleepPlan from "../components/SleepComponents/SleepPlan";
import Loading from "../components/UI/Loading";


function SleepHandle() {
  const [action,setAction] = useState();
  const [loading,setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const actionHandler = (action) => {
    setAction(action);
  }

  return (
      <div className="sm:min-h-full mt-[72px]">
        <div className="sm:absolute sm:top-0 sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 w-full flex justify-center items-center p-6">
          {loading ? <Loading /> : <div className="flex flex-col items-center">
            {!action &&<ClockNow /> }
            {!action && <ChooseAction actionHandler={actionHandler} />}
            {action === "plansleep" && <SleepPlan actionHandler={actionHandler} />}
            {action === "sleepnow" && <WakeUpSleepNow actionHandler={actionHandler} />}
            {action === "planwakeup" && <WakeUpPlan actionHandler={actionHandler} />}  
          </div>}
        </div>
      </div>
  );
}

export default SleepHandle;
