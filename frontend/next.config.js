const isStaticExport = process.env.BUILD_TARGET === "static";

const nextConfig = {
  ...(isStaticExport && {
    output: "export",
    images: { unoptimized: true },
  }),
  trailingSlash: true,
};

module.exports = nextConfig;