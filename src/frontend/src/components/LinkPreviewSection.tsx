import { Globe, MessageCircle, Share2, ThumbsUp } from "lucide-react";

export default function LinkPreviewSection() {
  return (
    <section
      id="link-preview"
      className="py-16 px-4"
      style={{ backgroundColor: "#EAE8E1" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl font-bold mb-4"
            style={{
              color: "#0F2B4A",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Link Preview
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16" style={{ backgroundColor: "#B89A4A" }} />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#B89A4A" }}
            />
            <div className="h-px w-16" style={{ backgroundColor: "#B89A4A" }} />
          </div>
          <p
            className="text-sm uppercase tracking-widest"
            style={{ color: "#555555" }}
          >
            How it looks when shared on Facebook
          </p>
        </div>

        {/* Facebook Post wrapper */}
        <div
          className="rounded-xl shadow-xl overflow-hidden"
          style={{ backgroundColor: "#ffffff", border: "1px solid #dddfe2" }}
          data-ocid="link_preview.card"
        >
          {/* FB post header */}
          <div className="flex items-center gap-3 px-4 pt-4 pb-3">
            {/* Avatar placeholder */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
              style={{ backgroundColor: "#0F2B4A" }}
            >
              LM
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: "#050505" }}>
                Lincoln Mingo
              </p>
              <div className="flex items-center gap-1">
                <p className="text-xs" style={{ color: "#65676b" }}>
                  Just now ·
                </p>
                <Globe className="w-3 h-3" style={{ color: "#65676b" }} />
              </div>
            </div>
          </div>

          {/* Post caption text */}
          <div className="px-4 pb-3">
            <p className="text-sm" style={{ color: "#050505" }}>
              🎓 It's official! Graduation day is almost here — come celebrate
              with us!{" "}
              <span style={{ color: "#1877f2" }}>
                #ClassOf2026 #RedOakHighSchool
              </span>
            </p>
          </div>

          {/* OG Image — wide 1200×630 crop */}
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "1200/630" }}
          >
            <img
              src="/assets/img_0934-019d402e-fad9-7323-94bb-472affe5fc6d.jpeg"
              alt="Lincoln Mingo - Senior Portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Link metadata strip */}
          <div
            className="px-4 py-3"
            style={{
              borderTop: "1px solid #dddfe2",
              backgroundColor: "#f0f2f5",
            }}
          >
            <p
              className="text-xs uppercase tracking-wide mb-1"
              style={{ color: "#65676b" }}
            >
              caffeine.ai
            </p>
            <p
              className="text-sm font-bold leading-snug"
              style={{ color: "#050505" }}
            >
              Lincoln Mingo | Class of 2026 Graduation
            </p>
            <p
              className="text-xs mt-1 leading-relaxed"
              style={{ color: "#65676b" }}
            >
              Join us in celebrating Lincoln Mingo&rsquo;s graduation! Red Oak
              High School Class of 2026. Thursday, May 28, 2026 at 4&nbsp;p.m. —
              Dr. Jim Vaszauskas Center for the Performing Arts, Mansfield, TX.
            </p>
          </div>

          {/* FB reaction bar */}
          <div
            className="px-4 py-2 flex items-center justify-between"
            style={{ borderTop: "1px solid #dddfe2" }}
          >
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
              style={{ color: "#65676b" }}
            >
              <ThumbsUp className="w-4 h-4" />
              Like
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
              style={{ color: "#65676b" }}
            >
              <MessageCircle className="w-4 h-4" />
              Comment
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
              style={{ color: "#65676b" }}
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#888888" }}>
          This is how your link will appear when shared on Facebook, iMessage,
          WhatsApp, and other platforms.
        </p>
      </div>
    </section>
  );
}
