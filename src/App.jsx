import Form from "./components/Form";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <main>
        <Section>{<HeroSection />}</Section>
        <Form />
      </main>
    </>
  );
}

export default App;
