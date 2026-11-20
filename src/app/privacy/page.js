import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Bineet Barthwal's portfolio: data collection, cookies, and your rights.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-[#141417]">
      <div className="max-w-[590px] mx-auto px-6 pt-10 pb-24">
        {/* Back button */}
        <div className="mb-9">
          <Link href="/" className="btn-secondary-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Back to home</span>
          </Link>
        </div>

        <h1
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
          className="font-display font-extrabold text-[38px] sm:text-[44px] text-[#141417] tracking-[-0.04em] leading-[1.02]"
        >
          Privacy Policy
        </h1>
        <p className="font-sans-custom text-[15px] text-[#52525B] mt-3 leading-[1.6]">
          Last updated: November 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 font-sans-custom text-[15px] leading-[1.7] text-[#3F3F46]">
          <section>
            <h2
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              className="font-display font-bold text-[20px] text-[#141417] mb-2"
            >
              Data Collection
            </h2>
            <p>
              I use Google Analytics to understand how visitors interact with my portfolio so I can make better design decisions. This tracks page views and general behaviour patterns only.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              className="font-display font-bold text-[20px] text-[#141417] mb-2"
            >
              Cookies
            </h2>
            <p>
              This site uses standard analytics cookies. No tracking cookies are used for advertising.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              className="font-display font-bold text-[20px] text-[#141417] mb-2"
            >
              No Personally Identifiable Information
            </h2>
            <p>
              I do not collect, store, or sell any personally identifiable information (PII) about you.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
              className="font-display font-bold text-[20px] text-[#141417] mb-2"
            >
              Contact
            </h2>
            <p>
              Questions? Reach me at{" "}
              <a
                href="mailto:hello@bineet.in"
                className="text-[#3B5BFF] hover:underline"
              >
                hello@bineet.in
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200">
          <Link href="/" className="btn-secondary-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
