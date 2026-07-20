import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    // Temporary: wind-turbine-vr case study links images from the 2018 archive
    // site until they are re-hosted in /public.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yuan00611.github.io",
        pathname: "/portfolio/**",
      },
      {
        protocol: "https",
        hostname: "yuan00611.github.io",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;