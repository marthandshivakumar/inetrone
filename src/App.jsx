import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topnavbar"; 
import Home from "./pages/Home"; 
import "./App.css"; 
import 'swiper/css';
import Footer from "./components/Footer";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
