import Contributors from "./Pages/Contributors";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./Pages/About";
import ContributorsState from "./contexts/contributors/contributorsState";

function App() {
  return (
    <ContributorsState>
      <div className="dark:bg-gray-900 dark:text-white">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ContributorsState>
  );
}

export default App;
