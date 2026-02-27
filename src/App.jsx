import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import ListingGrid from "./components/Marketplace/ListingGrid";
import CreateListing from "./components/Marketplace/CreateListing";
import ReviewSection from "./components/Marketplace/ReviewSection";
import ChatBox from "./components/Marketplace/ChatBox";
import ListingDetail from "./pages/ListingDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketplace" element={<ListingGrid />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/review-secrtion" element={<ReviewSection />} />
          <Route path="/chat-box" element={<ChatBox />} />
          <Route path="/listing/:id" element={<ListingDetail />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
