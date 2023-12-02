import Button from "./Button";
import NavigationLink from "./NavigationLink";

function DesktopNav() {
  return (
    <nav className=" hidden  md:flex md:w-full md:flex-row md:justify-between ">
      <ul className=" flex flex-col justify-center text-neutral-grayish-violet items-center gap-3 md:flex-row md:gap-9">
        <NavigationLink navLinkName="features" />
        <NavigationLink navLinkName="Pricing" />
        <NavigationLink navLinkName="Resources" />
      </ul>
      <ul className=" flex flex-col justify-center items-center gap-3 md:flex-row md:gap-9  ">
        <Button buttonText="login" />
        <Button buttonText="logout" btn_primary="btn_primary" />
      </ul>
    </nav>
  );
}

export default DesktopNav;
