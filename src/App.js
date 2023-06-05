import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { ContactMe } from "./Components/ContactMe";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
      <Skills />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
