import { Route, Routes } from "react-router-dom";
import "./Main.css";
import NavFunc from "./Navbar";
import Home from "./pages/Home";
import SectionTwo from "./pages/SectionTwo";


function App() {
  return (
    <div className="wrapper">
      <NavFunc />
    </div>
  );
}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<SectionTwo />} />
      </Routes>

export default App;
