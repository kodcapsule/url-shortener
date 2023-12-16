import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar({ showMobileNav = false }) {
  return (
    <div className="mainNav  400 md:w-full md:h-full">
      {showMobileNav && <MobileNav />}
      <DesktopNav />
    </div>
  );
}

export default Navbar;
