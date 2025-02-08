import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./applayout/applayout";
import Home from "./pages/home";
import About from "./pages/about";
import Form from "./pages/form";
import Rolex1 from "./pages/rolex1";
import Rolex2 from "./pages/rolex2";
import Rolex3 from "./pages/rolex3";

function App() {
  return (
    <Router>
      <Routes>
        {/* Use AppLayout as the main layout */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<Form />} />
          <Route path="rolex1" element={<Rolex1 />} />
          <Route path="rolex2" element={<Rolex2 />} />
          <Route path="rolex3" element={<Rolex3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
