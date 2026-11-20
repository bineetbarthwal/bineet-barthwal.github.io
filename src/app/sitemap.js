export default function sitemap() {
  return [
    { url: "https://bineet.in", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://bineet.in/work", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://bineet.in/studio", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://bineet.in/will", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://bineet.in/mih", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://bineet.in/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
