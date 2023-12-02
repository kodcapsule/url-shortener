import Button from "./Button";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavigationLink from "./NavigationLink";

function Navbar() {
  const showMobileNav = false;
  return (
    <div className="mainNav md:w-full ">
      {/*  mobile screen navigation bar  */}
      {showMobileNav && <MobileNav />}
      {/* large screen navigation bar  */}
      <DesktopNav />
    </div>
  );
}

export default Navbar;
