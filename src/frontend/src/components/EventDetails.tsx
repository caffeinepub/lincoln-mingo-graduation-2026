export default function EventDetails() {
  return (
    <section
      id="event"
      className="py-16 px-4"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-xs uppercase tracking-[0.4em] font-semibold mb-3"
          style={{ color: "#8B1A28" }}
        >
          You Are Invited
        </p>
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: "#0F2B4A", fontFamily: "'Playfair Display', serif" }}
        >
          The Ceremony
        </h2>
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-16" style={{ backgroundColor: "#B89A4A" }} />
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#B89A4A" }}
          />
          <div className="h-px w-16" style={{ backgroundColor: "#B89A4A" }} />
        </div>

        <div className="grid gap-6">
          {/* Date & Time */}
          <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center gap-3 text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#0F2B4A" }}
            >
              <svg
                role="img"
                aria-label="Calendar"
                className="w-6 h-6"
                fill="none"
                stroke="#B89A4A"
                viewBox="0 0 24 24"
              >
                <title>Calendar</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-1"
                style={{ color: "#8B1A28" }}
              >
                Date &amp; Time
              </p>
              <p
                className="text-lg font-semibold"
                style={{
                  color: "#0F2B4A",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Thursday, May 28, 2026
              </p>
              <p className="text-base" style={{ color: "#333333" }}>
                4:00 PM (Central Time)
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center gap-3 text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#0F2B4A" }}
            >
              <svg
                role="img"
                aria-label="Location"
                className="w-6 h-6"
                fill="none"
                stroke="#B89A4A"
                viewBox="0 0 24 24"
              >
                <title>Location</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-1"
                style={{ color: "#8B1A28" }}
              >
                Venue
              </p>
              <p
                className="text-lg font-semibold"
                style={{
                  color: "#0F2B4A",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Dr. Jim Vaszauskas Center
              </p>
              <p className="text-sm" style={{ color: "#555555" }}>
                for the Performing Arts, Mansfield ISD
              </p>
              <p className="text-sm mt-1" style={{ color: "#555555" }}>
                1110 W. Debbie Ln, Mansfield, TX 76063
              </p>
              <a
                href="https://maps.google.com/?q=1110+W+Debbie+Ln+Mansfield+TX+76063"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold mt-2 hover:underline"
                style={{ color: "#8B1A28" }}
              >
                <svg
                  role="img"
                  aria-label="External link"
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>External link</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Graduate */}
          <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center gap-3 text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#0F2B4A" }}
            >
              <svg
                role="img"
                aria-label="Graduation cap"
                className="w-6 h-6"
                fill="none"
                stroke="#B89A4A"
                viewBox="0 0 24 24"
              >
                <title>Graduation cap</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-1"
                style={{ color: "#8B1A28" }}
              >
                Graduate
              </p>
              <p
                className="text-lg font-semibold"
                style={{
                  color: "#0F2B4A",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Lincoln Mingo
              </p>
              <p className="text-sm" style={{ color: "#555555" }}>
                Red Oak High School &bull; Class of 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
