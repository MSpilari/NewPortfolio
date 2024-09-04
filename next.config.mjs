/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
