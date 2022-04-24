import { useState } from "react";
import ContactForm from "../components/ContactComponents/ContactForm";
import Loading from "../components/UI/Loading";

function Contact() {
  const [loading,setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className="sm:min-h-full mt-[72px] w-full">
      <div className="sm:absolute sm:top-0 sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 w-full flex flex-col justify-center items-center p-">
        {loading ? <Loading /> :  <ContactForm /> }
      </div>
    </div>
  );
}

export default Contact;
