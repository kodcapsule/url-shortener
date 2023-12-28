import FaceBookIcon from "./FaceBookIcon";
import FooterNavList from "./FooterNavList";
import InstagramIcon from "./InstagramIcon";
import Logo from "./Logo";
import PinterestIcon from "./PinterestIcon";
import TwitterIcon from "./TwitterIcon";

// import Logo from "../assets/logo.svg";

function Footer() {
  const navList1 = ["Link Shortening", "Branded Links", "Analytics"];
  const navList2 = ["Blog", "Developers", "Support"];
  const navList3 = ["About", "Our Team", "Careers", "Contact"];
  return (
    <footer className=" bg-neutral-very-dark-violet container mx-auto pb-10 pt-5">
      <div className="footerContainer grid grid-cols-1 gap-10 place-items-center md:gap-5 md:place-items-start  md:grid-cols-5 px-10 pt-6">
        <h1 className=" text-2xl font-bold cursor-pointer text-white  ">
          <Logo />
        </h1>
        <FooterNavList heading="Features" navList={navList1} />
        <FooterNavList heading="Resources" navList={navList2} />
        <FooterNavList heading="Company" navList={navList3} />

        <div className="socialMediaLogos flex  gap-4 items-center">
          <FaceBookIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
