import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";

const hostname = "https://arabogae.shop";

// 테스트 ID 목록 — 테스트 추가 시 여기에 함께 추가
const testIds = ["personalColor"];

async function generateSitemap() {
  const staticRoutes = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/privacy", changefreq: "monthly", priority: 0.3 },
  ];

  const testRoutes = testIds.map((id) => ({
    url: `/test/${id}`,
    changefreq: "weekly",
    priority: 0.8,
  }));

  const resultRoutes = testIds.map((id) => ({
    url: `/result/${id}`,
    changefreq: "weekly",
    priority: 0.7,
  }));

  const routes = [...staticRoutes, ...testRoutes, ...resultRoutes];

  const sitemapStream = new SitemapStream({ hostname });

  for (const route of routes) {
    sitemapStream.write(route);
  }
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);
  const __dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1"));
  const outputPath = path.join(__dirname, "dist", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemap.toString());
  console.log("✓ sitemap.xml generated at dist/sitemap.xml");
}

generateSitemap();
