import { useState } from "react";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";

function Header() {
  const [showMobileNave, setShowMobileNave] = useState(false);

  function show() {
    setShowMobileNave(() => !showMobileNave);
  }
  return (
    <header className="flex relative py-2  w-full justify-between md:gap-5 container px-4 mx-auto   ">
      <Logo color="neutral-very-dark-violet" />
      {/* <h1 className=" text-2xl font-bold cursor-pointer ">Shortly</h1> */}
      <Navbar showMobileNav={showMobileNave} />
      <button
        className="menu text-3xl md:hidden cursor-pointer text-neutral-grayish-violet transition"
        onClick={show}
      >
        {showMobileNave ? <AiOutlineClose /> : <FaBars />}
      </button>
    </header>
  );
}

export default Header;
