import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar({ showMobileNav = false }) {
  return (
    <div className="mainNav  md:w-[90%] md:h-full ">
      {showMobileNav && <MobileNav />}
      <DesktopNav />
    </div>
  );
}

export default Navbar;
