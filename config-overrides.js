const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// config-overrides.js
module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    process: false,
    orderedmap: false,
    fs: false,
    path: false,
    url: false,
  };

  config.plugins = [...config.plugins, new BundleAnalyzerPlugin()];

  return config;
};
