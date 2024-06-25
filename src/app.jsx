import React from "react";
import Header from "./commponent/NAvbar/navbar";
import Home from "./commponent/Home/Home";
import About from "./commponent/Aboute/About";
import Services from "./commponent/service/service";
import Portfolio from "./Portfolio/Portfolio";
import BlogSection from "./commponent/blog/blog";
import ContactSection from "./skills/contact";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export default App;
