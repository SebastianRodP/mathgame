import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MathGame from "./components/MathGame";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<MathGame />} />
      </Routes>
    </div>
  );
}

export default App;
