import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components.js/About";
import Contact from "./components.js/Contact";
import Header from "./components.js/Header";
import Projects from "./components.js/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/header" element={<Header />} /> */}
        <Route path="/" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
