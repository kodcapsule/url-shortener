import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section>{<HeroSection />}</Section>
      </main>
    </>
  );
}

export default App;
