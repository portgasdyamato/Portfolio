/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@react-three/fiber", "@react-three/drei", "three"],
}

export default nextConfig
