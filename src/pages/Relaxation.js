import { useState } from "react";
import ButtonsSound from "../components/RelaxationComponents/ButtonsSound";
import Loading from "../components/UI/Loading";

function Relaxation() {
  const [loading,setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className="sm:min-h-full mt-[72px]">
      <div className="sm:absolute sm:top-0 sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 w-full flex flex-col justify-center items-center p-">
        {loading ? <Loading /> : <ButtonsSound  />}
      </div>
    </div>
  );
}

export default Relaxation;
