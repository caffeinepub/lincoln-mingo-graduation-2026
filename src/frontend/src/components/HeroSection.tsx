import { useEffect, useState } from "react";

const GRADUATION_DATE = new Date("2026-05-28T16:00:00-05:00").getTime();

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = GRADUATION_DATE - now;
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
  }, []);

  return (
    <div className="flex gap-4 justify-center mt-8">
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
            className="w-18 h-18 flex items-center justify-center font-bold text-2xl"
            style={{
              width: "72px",
              height: "72px",
              backgroundColor: "rgba(15,43,74,0.9)",
              color: "#B89A4A",
              border: "2px solid #B89A4A",
              fontFamily: "'Playfair Display', serif",
              boxShadow: "0 0 20px rgba(184,154,74,0.25)",
            }}
          >
            {String(value).padStart(2, "0")}
          </div>
          <div
            className="text-xs uppercase tracking-widest mt-2"
            style={{ color: "#B89A4A" }}
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
    <section id="hero" style={{ backgroundColor: "#0A1628" }}>
      {/* ── Text Header ── */}
      <div className="pt-12 pb-6 px-4 text-center">
        <p
          className="text-xs uppercase tracking-[0.55em] font-bold mb-5"
          style={{ color: "#B89A4A" }}
        >
          Red Oak High School
        </p>

        <h1
          className="font-black leading-none uppercase"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            color: "#FFFFFF",
            textShadow: "0 4px 32px rgba(184,154,74,0.35)",
            letterSpacing: "-0.01em",
          }}
        >
          Lincoln
        </h1>
        <h1
          className="font-black leading-none uppercase"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            color: "#B89A4A",
            textShadow: "0 4px 32px rgba(184,154,74,0.5)",
            letterSpacing: "-0.01em",
            marginTop: "-0.05em",
          }}
        >
          Mingo
        </h1>

        <div className="flex items-center justify-center gap-4 mt-4 mb-2">
          <div
            className="h-px flex-1"
            style={{ maxWidth: "80px", backgroundColor: "#8B1A28" }}
          />
          <p
            className="text-lg md:text-2xl font-bold uppercase tracking-[0.3em]"
            style={{
              color: "#8B1A28",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Class of 2026
          </p>
          <div
            className="h-px flex-1"
            style={{ maxWidth: "80px", backgroundColor: "#8B1A28" }}
          />
        </div>
      </div>

      {/* ── Desktop: 3-Panel Collage — Cap & Gown FIRST, then two football shots ── */}
      <div
        className="relative hidden md:flex items-stretch"
        style={{ minHeight: "560px" }}
      >
        {/* PANEL 1 — Senior Portrait / Cap & Gown (FIRST) */}
        <div
          className="relative overflow-hidden"
          style={{
            flex: "1",
            clipPath: "polygon(0 0, 100% 0, calc(100% - 50px) 100%, 0 100%)",
            zIndex: 3,
          }}
        >
          <img
            src="/assets/img_0939-019d41a3-646f-766e-8edc-509e9768db91.jpeg"
            alt="Lincoln Mingo - Senior Portrait Cap & Gown"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "top center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,22,40,0.05) 0%, transparent 30%, rgba(10,22,40,0.55) 100%)",
            }}
          />
          <div className="absolute bottom-6 left-6">
            <span
              className="text-xs font-black uppercase tracking-[0.3em] px-4 py-2"
              style={{
                backgroundColor: "#B89A4A",
                color: "#0A1628",
                boxShadow: "0 2px 12px rgba(184,154,74,0.5)",
              }}
            >
              Senior Portrait
            </span>
          </div>
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: "#B89A4A" }}
          />
        </div>

        {/* PANEL 2 — Football: Arms Crossed */}
        <div
          className="relative overflow-hidden"
          style={{
            flex: "1",
            clipPath: "polygon(50px 0, 100% 0, calc(100% - 50px) 100%, 0 100%)",
            marginLeft: "-50px",
            zIndex: 2,
          }}
        >
          <img
            src="/assets/img_0948-019d41a3-648e-724d-8ba8-afa9a58460a4.jpeg"
            alt="Lincoln Mingo - #13 Arms Crossed"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "top center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,22,40,0.1) 0%, transparent 35%, rgba(10,22,40,0.6) 100%)",
            }}
          />
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <span
              className="text-xs font-black uppercase tracking-[0.3em] px-4 py-2"
              style={{
                backgroundColor: "#8B1A28",
                color: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(139,26,40,0.5)",
              }}
            >
              #13
            </span>
          </div>
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: "#B89A4A" }}
          />
        </div>

        {/* PANEL 3 — Football: With Ball */}
        <div
          className="relative overflow-hidden"
          style={{
            flex: "1",
            clipPath: "polygon(50px 0, 100% 0, 100% 100%, 0 100%)",
            marginLeft: "-50px",
            zIndex: 1,
          }}
        >
          <img
            src="/assets/img_0949-019d41a3-6482-70ea-b275-390a920df063.jpeg"
            alt="Lincoln Mingo - #13 Game Ready"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "top center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,22,40,0.1) 0%, transparent 35%, rgba(10,22,40,0.6) 100%)",
            }}
          />
          <div className="absolute bottom-6 right-6">
            <span
              className="text-xs font-black uppercase tracking-[0.3em] px-4 py-2"
              style={{
                backgroundColor: "#8B1A28",
                color: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(139,26,40,0.5)",
              }}
            >
              Game Ready
            </span>
          </div>
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: "#B89A4A" }}
          />
        </div>
      </div>

      {/* ── Mobile: Stacked — Cap & Gown FIRST ── */}
      <div className="flex flex-col md:hidden" style={{ gap: "3px" }}>
        {/* FIRST: Senior Portrait / Cap & Gown */}
        <div className="relative overflow-hidden" style={{ height: "400px" }}>
          <img
            src="/assets/img_0939-019d41a3-646f-766e-8edc-509e9768db91.jpeg"
            alt="Lincoln Mingo - Senior Portrait Cap & Gown"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "top center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(10,22,40,0.8) 100%)",
            }}
          />
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <span
              className="text-xs font-black uppercase tracking-widest px-4 py-2"
              style={{
                backgroundColor: "#B89A4A",
                color: "#0A1628",
              }}
            >
              Senior Portrait
            </span>
          </div>
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: "#B89A4A" }}
          />
        </div>

        {/* Football: Arms Crossed */}
        <div className="relative overflow-hidden" style={{ height: "340px" }}>
          <img
            src="/assets/img_0948-019d41a3-648e-724d-8ba8-afa9a58460a4.jpeg"
            alt="Lincoln Mingo - #13 Arms Crossed"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "top center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(10,22,40,0.8) 100%)",
            }}
          />
          <div className="absolute bottom-4 left-4">
            <span
              className="text-xs font-black uppercase tracking-widest px-3 py-1"
              style={{ backgroundColor: "#8B1A28", color: "#FFFFFF" }}
            >
              #13
            </span>
          </div>
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: "#B89A4A" }}
          />
        </div>

        {/* Football: With Ball */}
        <div className="relative overflow-hidden" style={{ height: "340px" }}>
          <img
            src="/assets/img_0949-019d41a3-6482-70ea-b275-390a920df063.jpeg"
            alt="Lincoln Mingo - #13 Game Ready"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "top center" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(10,22,40,0.8) 100%)",
            }}
          />
          <div className="absolute bottom-4 right-4">
            <span
              className="text-xs font-black uppercase tracking-widest px-3 py-1"
              style={{ backgroundColor: "#8B1A28", color: "#FFFFFF" }}
            >
              Game Ready
            </span>
          </div>
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: "#B89A4A" }}
          />
        </div>
      </div>

      {/* ── Bottom: Countdown + RSVP ── */}
      <div className="pb-14 pt-10 px-4 text-center">
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
          Please join us as we celebrate this incredible milestone. Your
          presence would make this special day even more meaningful.
        </p>
        <Countdown />
        <button
          type="button"
          onClick={() => scrollTo("rsvp")}
          data-ocid="hero.primary_button"
          className="mt-10 px-12 py-4 text-sm uppercase font-black tracking-widest text-white transition-all hover:opacity-90 hover:scale-105"
          style={{
            backgroundColor: "#8B1A28",
            letterSpacing: "0.22em",
            border: "2px solid #B89A4A",
            boxShadow:
              "0 4px 24px rgba(139,26,40,0.5), 0 0 0 1px rgba(184,154,74,0.2)",
          }}
        >
          RSVP Now
        </button>
      </div>
    </section>
  );
}
