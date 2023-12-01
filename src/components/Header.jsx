import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa6";

function Header() {
  return (
    <header className=" flex  px-5 my-2 justify-between items-center   md:gap-12 md:items-center ">
      <h1 className=" text-2xl font-bold cursor-pointer ">Shortly</h1>
      <div className="navlinks hidden md:flex w-11/12">
        <Navbar />
      </div>

      <div className="menu text-3xl md:hidden cursor-pointer text-neutral-grayish-violet">
        <FaBars />
      </div>
    </header>
  );
}

export default Header;
