import Header from "./pages/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { Navbar } from "./components";
import "./App.scss";

const content = [
  <Navbar />,
  <Header />,
  <About />,
  // <Skills />,
  <Work />,
  <Contact />,
];

const bgColors = ["#1A232C", "#0F161C"];

const App = () => (
  <div className="app">
    {content.map((item, index) => (
      <div
        key={index}
        style={{ backgroundColor: bgColors[index % bgColors.length] }}
      >
        {item}
      </div>
    ))}
  </div>
);

export default App;
