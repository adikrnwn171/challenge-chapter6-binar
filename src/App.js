import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Rent from "./pages/rentCars";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sewa" element={<Rent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;