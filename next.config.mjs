/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/sudohaxe",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/sudohaxe",
  },
};

export default nextConfig;
