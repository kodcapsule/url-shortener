import Form from "./components/Form";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";

import iconF from "./assets/icon-brand-recognition.svg";

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
          <div className="cards">
            <article className=" relative bg-white shadow-lg rounded-lg  text-center p-2 w-[19rem]">
              <div className="card-icon w-12 h-12 p-3 rounded-full absolute bg-primary-dark-violet top-[10%] left-0">
                <img src={`${iconF}`} alt="" />
              </div>
              <h4 className=" text-xl font-bold mb-2">Brand Recognition </h4>
              <p className=" text-xs text-neutral-grayish-violet">
                Boost your Brand recognition with each click. Generic links
                don't mean a thing.Branded links help instil confidence in your
                content.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
