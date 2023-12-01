import Button from "./Button";
import NavigationLink from "./NavigationLink";

function Navbar() {
  return (
    <nav className=" flex  w-full justify-between items-center ">
      <ul className=" flex gap-9">
        <NavigationLink navLinkName="features" />
        <NavigationLink navLinkName="Pricing" />
        <NavigationLink navLinkName="Resources" />
      </ul>
      <ul className=" user flex gap-9">
        <Button buttonText="login" />
        <Button buttonText="logout" btn_primary="btn_primary" />
      </ul>
    </nav>
  );
}

export default Navbar;
