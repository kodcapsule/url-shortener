import FormBgDesktop from "../assets/bg-shorten-desktop.svg";

function Form() {
  return (
    <div className="urlform py-8  rounded-md bg-primary-dark-violet  w-full md:w-7/12 mx-auto  flex flex-row  ">
      <form className="  flex flex-col md:flex-row  justify-center gap-4 md:gap-3 w-full">
        <input
          type="text"
          name="url"
          placeholder=" shorten a link here"
          className=" w-full md:w-8/12 p-2 rounded-md text-sm"
        />

        <button className=" btn btn_primary rounded">shorten it!</button>
      </form>
    </div>
  );
}

export default Form;