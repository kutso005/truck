import "../src/assets/styles/App.css";
import "../src/assets/styles/media.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurServices from "./components/OurServices";
import Reviews from "./components/Reviews";
import Section from "./components/Section";
import Worked from "./components/Worked";
import ContactButtons from "./components/ContactButtons";
import { useEffect } from "react";
import { get } from "./API/api";

function App() {
  useEffect(() => {
    const fetchLogoData = async () => {
      try {
        const response = await get.getLogo();
        const { favicon } = response[0];

        const linkElement = document.querySelector("link[rel='icon']");
        if (linkElement) {
          linkElement.href = favicon;
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchLogoData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Section />
      <About />
      <OurServices />
      <Worked />
      <Reviews />
      <Footer />
      <ContactButtons />
    </div>
  );
}

export default App;
