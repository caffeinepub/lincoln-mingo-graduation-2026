const photos = [
  {
    src: "/assets/img_0939-019d41a3-646f-766e-8edc-509e9768db91.jpeg",
    alt: "Lincoln Mingo - Senior Portrait Cap & Gown",
    label: "Senior Portrait",
    borderColor: "#B89A4A",
  },
  {
    src: "/assets/img_0948-019d41a3-648e-724d-8ba8-afa9a58460a4.jpeg",
    alt: "Lincoln Mingo - #13 Arms Crossed",
    label: "#13",
    borderColor: "#8B1A28",
  },
  {
    src: "/assets/img_0949-019d41a3-6482-70ea-b275-390a920df063.jpeg",
    alt: "Lincoln Mingo - #13 Game Ready",
    label: "Game Ready",
    borderColor: "#0F2B4A",
  },
  {
    src: "/assets/img_8550-019d4159-bdc5-73c9-b333-c4d9f1f1af3d.jpeg",
    alt: "Lincoln Mingo - Senior Portrait",
    label: "Senior Portrait",
    borderColor: "#B89A4A",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-16 px-4"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <div className="max-w-5xl mx-auto text-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              data-ocid={`gallery.item.${index + 1}`}
              className="rounded-lg overflow-hidden shadow-md relative group"
              style={{ border: `3px solid ${photo.borderColor}` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: "280px", maxHeight: "380px" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{
                  background:
                    "linear-gradient(transparent, rgba(15,43,74,0.92))",
                }}
              >
                <p className="text-white text-sm font-semibold uppercase tracking-widest">
                  {photo.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-10 text-base italic"
          style={{ color: "#555555", fontFamily: "'Playfair Display', serif" }}
        >
          &ldquo;The future belongs to those who believe in the beauty of their
          dreams.&rdquo;
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
