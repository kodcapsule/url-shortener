import React from "react";

function ShortLink() {
  return (
    <p className=" bg-white  rounded-md shadow-sm w-11/12 md:w-[80%]  lg:w-7/12 mx-auto mt-5 flex gap-2 flex-col md:flex-row justify-between p-3 text-xs">
      <span className=" p-1 border-b-2 md:border-0">
        Lorem ipsum dolor sit amet.
      </span>
      <span className="leftContent flex gap-2 md:gap-4 flex-col md:flex-row items-center  ">
        <span className=" text-primary-cyan">Lorem ipsum dolor sit amet.</span>
        <button className=" btn btn_primary rounded w-[80%] md:w-[28%]">
          copy
        </button>
      </span>
    </p>
  );
}

export default ShortLink;
