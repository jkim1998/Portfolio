import React from "react";

import { About, Contact, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Work />
    <Contact />
  </div>
);

export default App;
