/* eslint-disable no-undef */
module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  target: "serverless",
  webpack(cfg) {
    if (cfg.name === "server" && cfg.mode === "production") {
      cfg.optimization.minimize = true;
    }
    return cfg;
  },
};
