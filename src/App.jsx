import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CampaignDetail from "./Pages/CampaignDetail";
import CreateCampaign from "./Pages/CreateCampaign";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign/:id" element={<CampaignDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
