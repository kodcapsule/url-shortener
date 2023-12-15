import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar({ showMobileNav = false }) {
  return (
    <div className="mainNav   ">
      {showMobileNav && <MobileNav />}
      <DesktopNav />
    </div>
  );
}

export default Navbar;
