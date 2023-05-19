module.exports = {
  content: ["node_modules/preline/dist/*.js", "./src/**/*.{html,ts}"],
  plugins: [require("preline/plugin")],
  theme: {
    extend: {},
  },
};
