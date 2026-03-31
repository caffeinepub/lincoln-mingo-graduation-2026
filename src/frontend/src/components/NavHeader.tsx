import { useState } from "react";

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "The Event", id: "event" },
    { label: "RSVP", id: "rsvp" },
    { label: "Gallery", id: "gallery" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm"
      style={{ borderBottom: "2px solid #B89A4A" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <span
            className="font-serif text-xl font-bold tracking-wide"
            style={{
              color: "#0F2B4A",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Lincoln Mingo
          </span>
          <span
            className="block text-xs uppercase tracking-widest"
            style={{ color: "#8B1A28" }}
          >
            Class of 2026
          </span>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="text-xs uppercase font-semibold tracking-widest transition-colors hover:opacity-70"
              style={{ color: "#0F2B4A", fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </button>
          ))}
        </div>
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className="w-5 h-0.5 mb-1"
            style={{ backgroundColor: "#0F2B4A" }}
          />
          <div
            className="w-5 h-0.5 mb-1"
            style={{ backgroundColor: "#0F2B4A" }}
          />
          <div className="w-5 h-0.5" style={{ backgroundColor: "#0F2B4A" }} />
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-t"
          style={{ borderColor: "#e5e7eb" }}
        >
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="block w-full text-left px-6 py-3 text-sm uppercase font-semibold tracking-widest border-b last:border-b-0"
              style={{ color: "#0F2B4A", borderColor: "#f3f4f6" }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
