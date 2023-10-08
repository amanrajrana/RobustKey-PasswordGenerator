import Contributors from "./components/Contributors";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";


function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Header />
      <Routes>
        <Route path="/RobustKey-PasswordGenerator" element={<Home />} />
        <Route path="RobustKey-passwordGenerator/contributors" element={<Contributors />} />
        <Route path="/RobustKey-PasswordGenerator/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
