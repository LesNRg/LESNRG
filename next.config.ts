import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
