// import FormBgDesktop from "../assets/bg-shorten-desktop.svg";

import { useState } from "react";

function Form() {
  const [url, setUrl] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hi");
  }
  return (
    <div className="urlform py-8 px-3 md:px-0 rounded-md form_bg  bg-primary-dark-violet w-11/12 md:w-[80%]  lg:w-7/12 mx-auto  flex flex-row z-10 ">
      <form
        className="  flex flex-col md:flex-row  justify-center gap-4 md:gap-3 w-full "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="url"
          placeholder=" shorten a link here"
          className=" w-full md:w-7/12 lg:w-8/12 p-2 rounded-md text-xs text-secondary-red outline-secondary-red focus:outline-2 "
        />

        <button className=" btn btn_primary rounded">shorten it!</button>
      </form>
    </div>
  );
}

export default Form;
