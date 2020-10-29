const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(__dirname, "src/components/assets"),
  webpack(config, options) {
    return config;
  },
});
