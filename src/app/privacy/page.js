import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Bineet Barthwal",
  description:
    "Privacy policy for Bineet Barthwal's portfolio website — data collection, cookies, and your rights.",
};

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="max-w-2xl mx-auto py-24 px-6 w-full">
        {/* Header */}
        <h1
          className="text-3xl font-normal text-gray-900 md:text-4xl"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="mt-12 flex flex-col gap-10">
          {/* Data Collection */}
          <section>
            <h2
              className="text-lg font-medium text-gray-900 md:text-xl"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Data Collection
            </h2>
            <p
              className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              I use Google Analytics to understand how visitors use my portfolio
              so I can make better design decisions. This tracks page views and
              general behavior.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2
              className="text-lg font-medium text-gray-900 md:text-xl"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Cookies
            </h2>
            <p
              className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              This site uses standard cookies to enable these analytics.
            </p>
          </section>

          {/* No PII */}
          <section>
            <h2
              className="text-lg font-medium text-gray-900 md:text-xl"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              No Personally Identifiable Information
            </h2>
            <p
              className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              I do not collect, store, or sell any personally identifiable
              information (PII) about you.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-lg font-medium text-gray-900 md:text-xl"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Contact
            </h2>
            <p
              className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              If you have questions, reach me at{" "}
              <a
                href="mailto:hello@bineet.in"
                className="text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
              >
                hello@bineet.in
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer Link */}
        <div className="mt-16 pt-8 border-t border-zinc-200">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
