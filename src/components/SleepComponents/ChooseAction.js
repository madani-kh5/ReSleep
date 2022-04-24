import sleeping from "../../images/sleeping.png";
import day from "../../images/day.png";
import clock from "../../images/clock.png";
import Action from "./Action";


function ChooseAction(props) {
  return (
    <div className="flex flex-col justify-center items-center sm:m-2 m-0 sm:mb-0 mb-10">
      <div className="text-[#464461] text-lg font-semibold">Please choose an action</div>
      <div className="flex sm:flex-row flex-col justify-center">
        <Action action="plansleep" actionHandler={props.actionHandler} image={sleeping} text='I plan to sleep at ...' />
        <Action action="sleepnow" actionHandler={props.actionHandler} image={day} text='If I sleep now, I have to wake up at...' />
        <Action action="planwakeup" actionHandler={props.actionHandler} image={clock} text='I have to wake up at ...' />
      </div>
    </div>
  );
}

export default ChooseAction;
