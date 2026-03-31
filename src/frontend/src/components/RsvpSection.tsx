import { useEffect, useState } from "react";
import { useActor } from "../hooks/useActor";

export default function RsvpSection() {
  const { actor } = useActor();
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("invite");
    if (code) setInviteCode(code);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor || !inviteCode) return;
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await actor.submitRSVP(name.trim(), attending, inviteCode);
      setSubmitted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      className="py-16 px-4"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-xl mx-auto text-center">
        <p
          className="text-xs uppercase tracking-[0.4em] font-semibold mb-3"
          style={{ color: "#8B1A28" }}
        >
          Join the Celebration
        </p>
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: "#0F2B4A", fontFamily: "'Playfair Display', serif" }}
        >
          RSVP
        </h2>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-16" style={{ backgroundColor: "#B89A4A" }} />
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#B89A4A" }}
          />
          <div className="h-px w-16" style={{ backgroundColor: "#B89A4A" }} />
        </div>
        <p className="text-sm mb-8" style={{ color: "#555555" }}>
          Please respond by April 15, 2026
        </p>

        {submitted ? (
          <div
            className="rounded-lg p-8"
            style={{ backgroundColor: "#F2F2F2", border: "2px solid #B89A4A" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#0F2B4A" }}
            >
              <svg
                role="img"
                aria-label="Checkmark"
                className="w-8 h-8"
                fill="none"
                stroke="#B89A4A"
                viewBox="0 0 24 24"
              >
                <title>Checkmark</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                color: "#0F2B4A",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {attending ? "We'll See You There!" : "Thank You for Responding"}
            </h3>
            <p className="text-base" style={{ color: "#555555" }}>
              {attending
                ? `Thanks, ${name}! We can't wait to celebrate with you on May 28th.`
                : `Thanks, ${name}. We're sorry you can't make it, but we appreciate you letting us know.`}
            </p>
          </div>
        ) : !inviteCode ? (
          <div
            className="rounded-lg p-8 text-center"
            style={{ backgroundColor: "#F2F2F2", border: "1px solid #e5e7eb" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#F9F0E8" }}
            >
              <svg
                role="img"
                aria-label="Envelope"
                className="w-6 h-6"
                fill="none"
                stroke="#B89A4A"
                viewBox="0 0 24 24"
              >
                <title>Envelope</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{
                color: "#0F2B4A",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Invite Link Required
            </h3>
            <p className="text-sm" style={{ color: "#555555" }}>
              You need a personal invite link to RSVP. Please contact the Mingo
              McFerren Family for your invitation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left">
            <div
              className="bg-white rounded-lg p-8 shadow-sm"
              style={{ border: "1px solid #e5e7eb" }}
            >
              <div className="mb-5">
                <label
                  htmlFor="rsvp-name"
                  className="block text-xs uppercase tracking-widest font-semibold mb-2"
                  style={{ color: "#0F2B4A" }}
                >
                  Your Full Name *
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded border text-sm outline-none focus:ring-2"
                  style={{
                    borderColor: "#d1d5db",
                    color: "#111111",
                    fontFamily: "'Inter', sans-serif",
                  }}
                />
              </div>

              <fieldset
                className="mb-6"
                style={{ border: "none", padding: 0, margin: 0 }}
              >
                <legend
                  className="text-xs uppercase tracking-widest font-semibold mb-3"
                  style={{ color: "#0F2B4A" }}
                >
                  Will you attend? *
                </legend>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending(true)}
                    className="flex-1 py-3 rounded font-semibold text-sm uppercase tracking-wider transition-all"
                    style={{
                      backgroundColor: attending ? "#0F2B4A" : "transparent",
                      color: attending ? "#FFFFFF" : "#0F2B4A",
                      border: "2px solid #0F2B4A",
                    }}
                  >
                    Yes, I'll Be There!
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttending(false)}
                    className="flex-1 py-3 rounded font-semibold text-sm uppercase tracking-wider transition-all"
                    style={{
                      backgroundColor: !attending ? "#8B1A28" : "transparent",
                      color: !attending ? "#FFFFFF" : "#8B1A28",
                      border: "2px solid #8B1A28",
                    }}
                  >
                    Unable to Attend
                  </button>
                </div>
              </fieldset>

              {error && (
                <p
                  className="text-sm mb-4 text-center"
                  style={{ color: "#8B1A28" }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting || !actor}
                className="w-full py-4 text-sm uppercase font-bold tracking-[0.2em] text-white rounded transition-all hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: "#0F2B4A" }}
              >
                {submitting ? "Submitting..." : "Submit RSVP"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
