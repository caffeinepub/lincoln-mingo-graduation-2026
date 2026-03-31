import { useState } from "react";
import AdminPanel from "./components/AdminPanel";
import EventDetails from "./components/EventDetails";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import NavHeader from "./components/NavHeader";
import RsvpSection from "./components/RsvpSection";

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F2F2F2", fontFamily: "'Inter', sans-serif" }}
    >
      <NavHeader />
      <main>
        <HeroSection />
        <EventDetails />
        <RsvpSection />
        <GallerySection />
      </main>
      <FooterSection onAdminClick={() => setShowAdmin(true)} />
      {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}
    </div>
  );
}
