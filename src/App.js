import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Welcome } from "./pages/Welcome";
import { About } from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/about/:productId" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
