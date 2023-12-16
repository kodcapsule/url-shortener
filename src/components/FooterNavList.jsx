import NavLinkItem from "./NavLinkItem";

function FooterNavList({ heading, navList }) {
  return (
    <nav>
      <h4 className=" text-base  text-white font-semibold mb-2 ">{heading}</h4>
      <ul className=" gap-2 flex flex-col">
        {navList.map((link) => (
          <NavLinkItem linkName={link} key={link} />
        ))}
      </ul>
    </nav>
  );
}

export default FooterNavList;
