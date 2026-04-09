/** @type {import('next').NextConfig} */
const nextConfig = {
  // BAGIAN INI SANGAT PENTING
  typescript: {
    // Ini akan benar-benar menghilangkan pesan "Checking validity of types"
    ignoreBuildErrors: true,
  },
  eslint: {
    // Menghilangkan proses linting saat build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;