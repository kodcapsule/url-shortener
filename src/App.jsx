import Form from "./components/Form";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";

import iconF from "./assets/icon-brand-recognition.svg";
import iconDetailed from "./assets/icon-detailed-records.svg";
import iconCustomized from "./assets/icon-fully-customizable.svg";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section>{<HeroSection />}</Section>
        <section className=" bg-slate-100 mt-10 container  mx-auto px-4">
          <Form />
          <div className="intro flex justify-center items-center flex-col mt-10">
            <h2 className=" text-4xl font-bold">Advance Statistics</h2>
            <p className=" text-sm text-neutral-grayish-violet">
              Track how your links are performing across the web with our
              advance statistics dashboard
            </p>
          </div>
          <div className="cards p-5 flex flex-col md:flex-row gap-10 md:g-5 justify-center items-center mt-10">
            <Card
              icon={iconF}
              heading="Brand Recognition"
              content=" Boost your Brand recognition with each click. Generic links
                don't mean a thing.Branded links help instil confidence in your
                content."
            />
            <Card
              icon={iconDetailed}
              heading="Detailed Records"
              content="Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions."
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
      </main>
    </>
  );
}

export default App;
