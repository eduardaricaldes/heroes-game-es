import { Routes, Route } from "react-router-dom";
import "./reset.css";

import InitPage from "./Pages/init";
import HomeGame from "./Pages/homegame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InitPage />} />
      <Route path="/home-game" element={<HomeGame />} />
    </Routes>
  );
}

export default App;
