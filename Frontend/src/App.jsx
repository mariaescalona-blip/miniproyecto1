import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hoy from "./pages/Hoy";
import CrearActividad from "./pages/CrearActividad";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hoy />} />
        <Route path="/crear" element={<CrearActividad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
