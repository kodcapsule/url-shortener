import Form from "./components/Form";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";

import iconF from "./assets/icon-brand-recognition.svg";
import iconDetailed from "./assets/icon-detailed-records.svg";
import iconCustomized from "./assets/icon-fully-customizable.svg";
import FacebookIcon from "./assets/icon-facebook.svg";
import InstagramIcon from "./assets/icon-instagram.svg";
import PinteresIcon from "./assets/icon-pinterest.svg";
import TwitterIcon from "./assets/icon-twitter.svg";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const navlinks1 = ["Link Shortening", "Branded Links", "Analytics"];
  const navlinks2 = ["Blog", "Developers", "Support"];
  const navlinks3 = ["About", "Our Team", "Careers", "Contact"];
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section className=" bg-slate-100  container  mx-auto px-4">
          <Form />
          <div className="intro flex justify-center items-center flex-col mt-10">
            <h2 className=" text-4xl font-bold">Advance Statistics</h2>
            <p className=" text-sm text-neutral-grayish-violet">
              Track how your links are performing across the web with our
              advance statistics dashboard
            </p>
          </div>
          <div className="cards p-5 flex flex-col md:flex-row gap-16 md:g-5 justify-center items-center mt-10">
            <div className="card">
              <Card
                icon={iconF}
                heading="Brand Recognition"
                content=" Boost your Brand recognition with each click. Generic links
                don't mean a thing.Branded links help instil confidence in your
                content."
                showline={false}
              />
            </div>

            <Card
              icon={iconDetailed}
              heading="Detailed Records"
              content="Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions."
              showline={false}
            />
            <Card
              icon={iconCustomized}
              heading="Fully Customizable"
              content="Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement."
            />
          </div>
        </section>

        <section className=" form_bg  bg-primary-dark-violet container  mx-auto px-4  py-5 flex flex-col justify-center items-center gap-5">
          <h3 className=" text-2xl text-white font-bold">
            Boost your links today
          </h3>
          <Button buttonText="Get Started" btn_primary="btn_primary" />
        </section>

        <footer className=" bg-neutral-very-dark-violet container mx-auto pb-10 pt-5">
          <div className="footerContainer grid grid-cols-1 gap-10 place-items-center md:gap-5 md:place-items-start  md:grid-cols-5 px-10 pt-6">
            <h1 className=" text-2xl font-bold cursor-pointer text-white  ">
              Shortly
            </h1>
            <FooterNav heading="Features" navlinkList={navlinks1} />
            <FooterNav heading="Resources" navlinkList={navlinks2} />
            <FooterNav heading="Company" navlinkList={navlinks3} />

            {/*  */}
            <div className="socialMediaLogos flex  gap-3">
              <SocialMedia logo={FacebookIcon} />
              <SocialMedia logo={TwitterIcon} />
              <SocialMedia logo={PinteresIcon} />
              <SocialMedia logo={InstagramIcon} />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;

function FooterNav({ heading, navlinkList }) {
  return (
    <nav>
      <h4 className=" text-base  text-white font-semibold mb-2 ">{heading}</h4>
      <ul className=" gap-2 flex flex-col">
        {navlinkList.map((link) => (
          <NavLinkItem linkName={link} key={link} />
        ))}
      </ul>
    </nav>
  );
}

function SocialMedia({ logo }) {
  return (
    <img
      src={`${logo}`}
      alt="Facebook Icon "
      className=" w-5 h-5  hover:fill-primary-cyan hover:cursor-pointer"
    />
  );
}

function NavLinkItem({ linkName }) {
  return (
    <li className=" text-xs text-neutral-grayish-violet hover:text-primary-cyan hover:cursor-pointer ">
      <a href="#">{linkName}</a>
    </li>
  );
}
