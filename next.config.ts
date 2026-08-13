import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OG image routes read these font files at runtime via process.cwd(),
  // which Next's file tracing cannot infer on its own.
  outputFileTracingIncludes: {
    "/**/opengraph-image": [
      "./public/fonts/peddana-regular.ttf",
      "./node_modules/@fontsource/inter/files/inter-latin-800-normal.woff",
    ],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blower-door-testing",
        destination: "/large-building-blower-door-testing",
        permanent: true,
      },
      {
        source: "/whole-building-blower-door-test",
        destination: "/large-building-blower-door-testing",
        permanent: true,
      },
      {
        source: "/whole-building-blower-door-testing",
        destination: "/large-building-blower-door-testing",
        permanent: true,
      },
      {
        source: "/les-nrg-game",
        destination: "/thegame",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
