function NavLinkItem({ linkName }) {
  return (
    <li className=" text-xs text-neutral-grayish-violet hover:text-primary-cyan hover:cursor-pointer ">
      <a href="#">{linkName}</a>
    </li>
  );
}

export default NavLinkItem;
