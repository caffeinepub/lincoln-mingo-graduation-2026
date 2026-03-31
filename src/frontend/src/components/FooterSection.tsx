interface FooterSectionProps {
  onAdminClick: () => void;
}

export default function FooterSection({ onAdminClick }: FooterSectionProps) {
  return (
    <footer
      className="py-10 px-4"
      style={{ backgroundColor: "#0F2B4A", borderTop: "4px solid #8B1A28" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p
              className="font-bold text-xl tracking-wide"
              style={{
                color: "#B89A4A",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Lincoln Mingo
            </p>
            <p
              className="text-sm mt-1 uppercase tracking-widest"
              style={{ color: "#ffffff99" }}
            >
              Red Oak High School &middot; Class of 2026
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm" style={{ color: "#ffffff99" }}>
              Graduation Ceremony
            </p>
            <p className="text-sm font-semibold" style={{ color: "#B89A4A" }}>
              May 28, 2026 &middot; 4:00 PM
            </p>
            <p className="text-xs mt-1" style={{ color: "#ffffff80" }}>
              Dr. Jim Vaszauskas Center for the Performing Arts
            </p>
          </div>
          <div className="text-center md:text-right">
            <button
              type="button"
              onClick={onAdminClick}
              className="text-xs uppercase tracking-widest hover:underline transition-colors"
              style={{ color: "#ffffff50" }}
            >
              Admin
            </button>
          </div>
        </div>
        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs" style={{ color: "#ffffff50" }}>
            &copy; 2026 The Mingo McFerren Family
          </p>
        </div>
      </div>
    </footer>
  );
}
