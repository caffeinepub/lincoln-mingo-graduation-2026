export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-16 px-4"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="text-xs uppercase tracking-[0.4em] font-semibold mb-3"
          style={{ color: "#8B1A28" }}
        >
          Memories
        </p>
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: "#0F2B4A", fontFamily: "'Playfair Display', serif" }}
        >
          Celebrating Lincoln
        </h2>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-16" style={{ backgroundColor: "#B89A4A" }} />
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#B89A4A" }}
          />
          <div className="h-px w-16" style={{ backgroundColor: "#B89A4A" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="rounded-lg overflow-hidden shadow-md relative"
            style={{ border: "3px solid #B89A4A" }}
          >
            <img
              src="/assets/img_9526-019d402e-fb2a-779a-a1bc-d0082738288b.jpeg"
              alt="Lincoln Mingo - Senior Portrait"
              className="w-full object-cover object-top"
              style={{ maxHeight: "420px" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3"
              style={{
                background: "linear-gradient(transparent, rgba(15,43,74,0.9))",
              }}
            >
              <p className="text-white text-sm font-semibold uppercase tracking-widest">
                Senior Portrait
              </p>
            </div>
          </div>
          <div
            className="rounded-lg overflow-hidden shadow-md relative"
            style={{ border: "3px solid #8B1A28" }}
          >
            <img
              src="/assets/img_0934-019d402e-fad9-7323-94bb-472affe5fc6d.jpeg"
              alt="Lincoln Mingo - Graduate & Athlete"
              className="w-full object-cover object-top"
              style={{ maxHeight: "420px" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3"
              style={{
                background: "linear-gradient(transparent, rgba(15,43,74,0.9))",
              }}
            >
              <p className="text-white text-sm font-semibold uppercase tracking-widest">
                Graduate & Athlete
              </p>
            </div>
          </div>
        </div>

        <p
          className="mt-8 text-base italic"
          style={{ color: "#555555", fontFamily: "'Playfair Display', serif" }}
        >
          "The future belongs to those who believe in the beauty of their
          dreams."
        </p>
        <p
          className="mt-2 text-sm font-semibold uppercase tracking-widest"
          style={{ color: "#0F2B4A" }}
        >
          Lincoln Mingo · Class of 2026
        </p>
      </div>
    </section>
  );
}
