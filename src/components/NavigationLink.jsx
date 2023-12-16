// import { NavLink } from "react-router-dom";

function NavigationLink({ navLinkName }) {
  return (
    <li className="">
      {/* <NavLink to="#"></NavLink> */}
      <a href="#" className=" navLink  ">
        {navLinkName}
      </a>
    </li>
  );
}

export default NavigationLink;
