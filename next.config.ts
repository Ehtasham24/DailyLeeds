import type { NextConfig } from "next";

// Repo name — used as the base path when this is served as a GitHub Pages
// project site (https://<user>.github.io/<repo>/) instead of at a domain root.
const repoName = "DailyLeeds";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
