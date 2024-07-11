/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/sudohaxe",
  // process.env.NEXT_PUBLIC_NODE_ENV === "PRODUCTION" ? "/sudohaxe" : "", //DUE TO GH PAGES
};

export default nextConfig;
