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

function App() {
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
