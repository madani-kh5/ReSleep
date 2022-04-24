import bubble from "../../images/bubble.png";
import cloud from "../../images/cloud.png";
function Action(props){
    return(
        <button onClick={()=>props.actionHandler(props.action)} className="relative overflow-hidden flex flex-col items-center justify-center sm:w-32 h-44 w-[130px] m-2 p-2 rounded-xl bg-white text-[#464461] hover:bg-[#fae1dc] text-sm font-semibold">
          <img className="h-16 m-4" src={props.image} alt="sleep" />
          <img className="h-16 absolute -top-6 -right-4" src={bubble} alt="bubble" />
          <img className="h-4 absolute top-3 -right-4" src={cloud} alt="cloud" />
          <div className="sm:mx-2 mx-1">
            {props.text}
          </div>
        </button>
    );
}

export default Action;