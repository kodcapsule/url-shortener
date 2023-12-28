// import FormBgDesktop from "../assets/bg-shorten-desktop.svg";

import { useState } from "react";

const baseUrl = "https://cleanuri.com/";

function Form() {
  const [url, setUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (url === "") alert("input a url");
    getShortUrl(url);
    // console.log(url);
  }

  async function getShortUrl(longUrl) {
    const encodedUrl = baseUrl + encodeURI(longUrl);
    // console.log(encodedUrl);

    try {
      const resp = await fetch(encodedUrl, { method: "POST" });
      const shortUrl = await resp.json();
      return shortUrl;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="urlform py-8 px-3 md:px-0 rounded-md form_bg  bg-primary-dark-violet w-11/12 md:w-[80%]  lg:w-7/12 mx-auto  flex flex-col items-start z-10 ">
      <form
        className="  flex flex-col md:flex-row  justify-center  gap-4 md:gap-3 w-full  "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder=" shorten a link here..."
          className=" w-full  rounded-md text-xs p-3  flex flex-col md:w-7/12 lg:w-8/12 gap-2 items-start text-secondary-red outline-secondary-red focus:outline-2 placeholder:text-secondary-red placeholder:opacity-40
           "
          onChange={(e) => setUrl(() => e.target.value)}
        />

        <button className=" btn btn_primary rounded w-full md:w-fit ">
          shorten it!
        </button>
      </form>
    </div>
  );
}

export default Form;
