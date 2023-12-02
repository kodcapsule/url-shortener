import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa6";

function Header() {
  return (
    <header className=" flex px-5 my-2 justify-between  md:gap-12 w-full  ">
      <h1 className=" text-2xl font-bold cursor-pointer ">Shortly</h1>
      <Navbar />
      <div className="menu text-3xl md:hidden cursor-pointer text-neutral-grayish-violet">
        <FaBars />
      </div>
    </header>
  );
}

export default Header;
