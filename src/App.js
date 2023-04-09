import Header from "./pages/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { ThemeColors as qq } from "./assets/theme";

const content = [
  <Header />,
  <About />,
  // <Skills />,
  <Work />,
  <Contact />,
];

const bgColors = [qq.main, qq.sub];

const App = () => (
  <div className="app">
    <Navbar />
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
