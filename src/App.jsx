import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./app.css";
import Companies from "./components/companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/values/Value";
import Contact from "./components/contacts/Contact";

import Footer from "./components/Footer/Footer";
import GetStarteds from "./components/getStarted/getStarteds";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <div className="b-container">
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarteds />
        <Footer />
      </div>
    </div>
  );
}

export default App;
