import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import RecyclingCenters from "./pages/RecyclingCenters";
import Donate from "./pages/Donate";
import Pledge from "./pages/Pledge"; // Added Pledge page import
import BuySell from "./pages/BuySell"; // Added Buy & Sell page import
import CommunityChat from "./pages/CommunityChat"; // Added Buy & Sell page import
import Tips from "./pages/Tips"; // Added Buy & Sell page import
import Login from "./pages/Login"; // Added Buy & Sell page import
import Signup from "./pages/Signup"; // Added Buy & Sell page import

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recycling-centers" element={<RecyclingCenters />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/pledge" element={<Pledge />} /> {/* Added Pledge Route */}
            <Route path="/buy-sell" element={<BuySell />} /> {/* Added Buy & Sell Route */}
            <Route path="/community" element={<CommunityChat />} /> {/* Added Buy & Sell Route */}
            <Route path="/recycle" element={<Tips />} /> {/* Added Buy & Sell Route */}
            <Route path="/login" element={<Login />} /> {/* Added Buy & Sell Route */}
            <Route path="/signup" element={<Signup />} /> {/* Added Buy & Sell Route */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
