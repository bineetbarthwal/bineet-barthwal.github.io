export default function robots() {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "*"],
        allow: "/",
        disallow: ["/resume.pdf", "/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "Bytespider",
          "meta-externalagent",
          "Amazonbot",
          "Applebot-Extended",
          "PerplexityBot",
        ],
        disallow: "/",
      },
    ],
    sitemap: "https://bineet.in/sitemap.xml",
  };
}
