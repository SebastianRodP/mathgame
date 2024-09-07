import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MathGame from "./components/MathGame";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  return (
    
    <>
      <BackgroundMusic/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<MathGame />} />
      </Routes>
    </>
  );
}

export default App;
