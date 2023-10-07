import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      {/* <Home /> */}
      <HashRouter >
        <Routes basename="/RobustKey-PasswordGenerator">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
