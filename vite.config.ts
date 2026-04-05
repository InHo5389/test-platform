import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";
import puppeteer from "puppeteer";
import chromium from "@sparticuz/chromium";

const isVercel = process.env.VERCEL === "1";

const getExecutablePath = async () => {
  if (isVercel) {
    return await chromium.executablePath();
  }
  return puppeteer.executablePath();
};

const getLaunchArgs = () => {
  if (isVercel) {
    return chromium.args;
  }
  return ["--no-sandbox", "--disable-setuid-sandbox"];
};

export default defineConfig(async () => ({
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      routes: ["/", "/test/personalColor", "/privacy"],
      renderer: PuppeteerRenderer,
      server: { port: 3000, host: "localhost" },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 2000,
        launchOptions: {
          executablePath: await getExecutablePath(),
          args: getLaunchArgs(),
        },
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(/(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i, "arabogae.shop");
      },
    }),
  ],
}));
