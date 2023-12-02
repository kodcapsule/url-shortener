import { NavLink } from "react-router-dom";

function NavigationLink({ navLinkName }) {
  return (
    <li className="">
      <a href="#" className=" navLink  ">
        {navLinkName}
      </a>
    </li>
  );
}

export default NavigationLink;
