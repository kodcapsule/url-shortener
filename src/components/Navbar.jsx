import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar({ showMobileNav = false }) {
  // const showMobileNav = true;
  return (
    <div className="mainNav  md:w-full  ">
      {showMobileNav && <MobileNav />}
      <DesktopNav />
    </div>
  );
}

export default Navbar;
