import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  console.log('isdark :>> ', isDark);
  return (
    <>
      <div className={isDark ?"":"dark"}>
        <header className="separate-section  ">
          <Header isDark={isDark} setIsDark={setIsDark}/>
        </header>
        <section className="container ">
          <Hero />
        </section>
    <section className="separate-section ">
          <About />
        </section>
    <section className="container ">
          <Skill />
        </section>
    <section className="container ">
          <Project/>
        </section>
    <section className="container ">
          <Contact />
        </section>
        <footer className="container">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
