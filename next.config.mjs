/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: {
    loader: "custom",
    // 128px for avatars/cards, 640px for mobile, 1200px for desktop carousels
    imageSizes: [128],
    deviceSizes: [640, 1200],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_generateAndUseBluraImages: "true",
  },
};

export default nextConfig;
