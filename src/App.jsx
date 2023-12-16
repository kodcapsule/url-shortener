import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";

import Footer from "./components/Footer";
import AdvanceStatistics from "./components/AdvanceStatistics";
import BoostSection from "./components/BoostSection";

function App() {
  return (
    <>
      <main className=" mx-6 ">
        <Header />
        <HeroSection />
        <Section>
          <AdvanceStatistics />
        </Section>
        <Section>
          <BoostSection />
        </Section>
        <Footer />
      </main>
    </>
  );
}

export default App;
