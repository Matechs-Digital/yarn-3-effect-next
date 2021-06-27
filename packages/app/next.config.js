/* eslint-disable no-undef */
module.exports = {
  eslint: {
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
