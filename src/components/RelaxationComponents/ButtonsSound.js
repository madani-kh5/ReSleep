import ButtonSound from "./ButtonSound";
import wave from "../../images/wave.png";
import raining from "../../images/raining.png";
import sun from "../../images/sun.png";
import wind from "../../images/wind.png";
import river from "../../images/river.png";
import wood from "../../images/wood.png";
import { useRef } from "react";

function ButtonsSound(props) {
  const audioPlayerRef1 = useRef();
  const audioPlayerRef2 = useRef();
  const audioPlayerRef3 = useRef();
  const audioPlayerRef4 = useRef();
  const audioPlayerRef5 = useRef();
  const audioPlayerRef6 = useRef();

  let sounds = [
    {title:"Sun", image:sun,sound:"https://soundbible.com/mp3/meadowlark_daniel-simion.mp3",ref:audioPlayerRef1},
    {title:"Rain", image:raining ,sound:"https://soundbible.com/mp3/heavy-rain-daniel_simon.mp3",ref:audioPlayerRef2},
    {title:"Wind", image:wind,sound:"https://www.soundjay.com/nature/sounds/wind-howl-01.mp3",ref:audioPlayerRef3},
    {title:"Wave", image:wave,sound:"https://www.soundjay.com/nature/sounds/ocean-waves-1.mp3",ref:audioPlayerRef4},
    {title:"River", image:river,sound:"https://www.soundjay.com/nature/sounds/river-2.mp3",ref:audioPlayerRef5},
    {title:"Wood", image:wood,sound:"https://www.soundjay.com/nature/sounds/wood-logs-1.mp3",ref:audioPlayerRef6}
  ];

  return (
    <div className="flex flex-wrap justify-center items-center w-full sm:w-2/3">
      {sounds.map((sound,index) => {
        return <ButtonSound key={index} sound={sound} />
      })}
    </div>
  );
}

export default ButtonsSound;
