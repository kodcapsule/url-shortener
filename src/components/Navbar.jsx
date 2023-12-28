import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar({ showMobileNav = false }) {
  return (
    <div className="mainNav  md:w-full md:h-full ">
      {showMobileNav && <MobileNav />}
      <DesktopNav />
    </div>
  );
}

export default Navbar;
