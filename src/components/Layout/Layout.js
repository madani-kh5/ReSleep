import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import bubble from "../../images/bubble.png";
import cloud from "../../images/cloud.png";
import Footer from "./Footer";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main className="relative overflow-hidden w-full min-h-screen bg-[#FAF5F2]">
        <img src={bubble} alt="bubble" className="absolute -top-1/3 right-[90%] md:block hidden" />
        <img src={bubble} alt="bubble" className="absolute -top-1/4 left-[90%] md:block hidden" />
        <img src={bubble} alt="bubble" className="absolute -left-[6%] -bottom-14 md:block hidden"/>
        <img src={bubble} alt="bubble" className="absolute -bottom-36 -right-8 md:block hidden" />
        <img src={cloud} alt="cloud" className="absolute top-20 left-32 md:block hidden" />
        <img src={cloud} alt="cloud" className="absolute bottom-20  right-32 md:block hidden" />
        <img src={cloud} alt="cloud" className="absolute bottom-48 left-10 md:block hidden" />
        <div className="">
          {props.children}
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
