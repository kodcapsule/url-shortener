import FacebookIcon from "../assets/icon-facebook.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import PinteresIcon from "../assets/icon-pinterest.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import FooterNavList from "./FooterNavList";
import SocialMediaIcon from "./SocialMediaIcon";

function Footer() {
  const navList1 = ["Link Shortening", "Branded Links", "Analytics"];
  const navList2 = ["Blog", "Developers", "Support"];
  const navList3 = ["About", "Our Team", "Careers", "Contact"];
  return (
    <footer className=" bg-neutral-very-dark-violet container mx-auto pb-10 pt-5">
      <div className="footerContainer grid grid-cols-1 gap-10 place-items-center md:gap-5 md:place-items-start  md:grid-cols-5 px-10 pt-6">
        <h1 className=" text-2xl font-bold cursor-pointer text-white  ">
          Shortly
        </h1>
        <FooterNavList heading="Features" navList={navList1} />
        <FooterNavList heading="Resources" navList={navList2} />
        <FooterNavList heading="Company" navList={navList3} />

        <div className="socialMediaLogos flex  gap-3">
          <SocialMediaIcon logo={FacebookIcon} description="Facebook icon" />
          <SocialMediaIcon logo={TwitterIcon} description=" Twitter icon" />
          <SocialMediaIcon logo={PinteresIcon} description=" Pinterest Icon" />
          <SocialMediaIcon logo={InstagramIcon} description="Instagram Icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;