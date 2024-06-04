/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: ["images.unsplash.com", "res.cloudinary.com"],
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
  transpilePackages: ["@repo/ui"],
};

export default nextConfig;
