import { useEffect, useState } from "react";

function Countdown() {
  const target = new Date("2026-05-28T16:00:00-05:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="flex gap-4 mt-6">
      {(
        [
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Min" },
          { value: timeLeft.seconds, label: "Sec" },
        ] as const
      ).map(({ value, label }) => (
        <div key={label} className="text-center">
          <div
            className="w-14 h-14 flex items-center justify-center font-bold text-xl rounded"
            style={{
              backgroundColor: "#0F2B4A",
              color: "#B89A4A",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {String(value).padStart(2, "0")}
          </div>
          <div
            className="text-xs uppercase tracking-widest mt-1"
            style={{ color: "#8B1A28" }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="py-16 px-4"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Portrait with decorative frame */}
          <div className="flex-shrink-0 relative w-72 md:w-80">
            <div
              className="absolute rounded"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#B89A4A",
                top: 16,
                left: -16,
                zIndex: 0,
              }}
            />
            <div
              className="absolute rounded"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#8B1A28",
                top: 8,
                left: -8,
                zIndex: 0,
              }}
            />
            <div
              className="absolute rounded"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#0F2B4A",
                top: 0,
                left: 0,
                zIndex: 0,
              }}
            />
            <img
              src="/assets/img_9526-019d402e-fb2a-779a-a1bc-d0082738288b.jpeg"
              alt="Lincoln Mingo, Class of 2026"
              className="relative rounded shadow-2xl w-full object-cover"
              style={{ zIndex: 1, aspectRatio: "3/4", objectPosition: "top" }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full flex flex-col items-center justify-center z-10 shadow-lg"
              style={{
                backgroundColor: "#0F2B4A",
                border: "3px solid #B89A4A",
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{
                  color: "#B89A4A",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Class
              </span>
              <span
                className="text-lg font-bold"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                2026
              </span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-sm uppercase tracking-[0.3em] font-semibold mb-2"
              style={{ color: "#8B1A28" }}
            >
              Red Oak High School
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-4"
              style={{
                color: "#0F2B4A",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Congratulations,
              <br />
              <span style={{ color: "#8B1A28" }}>Lincoln!</span>
            </h1>
            <div
              className="w-16 h-1 mx-auto md:mx-0 mb-4"
              style={{ backgroundColor: "#B89A4A" }}
            />
            <p
              className="text-lg font-medium mb-2"
              style={{ color: "#333333" }}
            >
              Class of 2026 Graduate
            </p>
            <p className="text-base mb-6" style={{ color: "#555555" }}>
              Please join us as we celebrate this incredible milestone. Your
              presence would make this special day even more meaningful.
            </p>
            <Countdown />
            <button
              type="button"
              onClick={() => scrollTo("rsvp")}
              className="mt-8 px-10 py-3 text-sm uppercase font-bold tracking-widest text-white rounded transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#0F2B4A", letterSpacing: "0.2em" }}
            >
              RSVP Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
