import Button from "./Button";
import NavigationLink from "./NavigationLink";

function MobileNav() {
  return (
    <nav className="navbar-mobile  text-white font-bold mt-10 bg-primary-dark-violet  md:hidden md:w-full md:flex-row md:justify-between ">
      <ul className=" flex flex-col justify-center   text-xl items-center  gap-3 md:flex-row md:gap-9">
        <NavigationLink navLinkName="features" />
        <NavigationLink navLinkName="Pricing" />
        <NavigationLink navLinkName="Resources" />
      </ul>
      <ul className=" flex flex-col justify-center mt-4 border-t-[1.5px] border-neutral-grayish-violet py-2 items-center gap-3 md:flex-row md:gap-9  ">
        <Button buttonText="login" />
        <Button buttonText="logout" btn_primary="btn_primary" />
      </ul>
    </nav>
  );
}

export default MobileNav;
