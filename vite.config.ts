import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      routes: [
        "/",
        "/test/personalColor",
        "/privacy",
      ],
      renderer: PuppeteerRenderer,
      server: {
        port: 3000,
        host: "localhost",
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 2000,
        launchOptions: {
          executablePath: "C:\\Users\\qheog\\.cache\\puppeteer\\chrome\\win64-146.0.7680.153\\chrome-win64\\chrome.exe",
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        },
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            "arabogae.shop"
          );
      },
    }),
  ],
});
