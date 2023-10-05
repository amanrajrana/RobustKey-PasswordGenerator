import Contributors from "./components/Contributors";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Routes>
        <Route path="/RobustKey-PasswordGenerator" element={<Home />} />
        <Route path="/contributors" element={<Contributors />} />
      </Routes>
    </div>
  );
}

export default App;
