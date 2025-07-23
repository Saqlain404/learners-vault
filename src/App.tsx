import "./App.css";
import ScrollToTop from "./components/ScrollToTop"
import AboutPage from "./pages/AboutPage";
import AiMarketPlace from "./pages/AiMarketPlace";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/ai-marketplace" element={<AiMarketPlace/>} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage/>} />
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
