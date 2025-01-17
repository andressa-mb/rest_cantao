const nextJest = require("next/jest");
const { transform } = require("typescript");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
    "^react-dnd$": "react-dnd/dist/cjs",
    "^react-dnd-html5-backend$": "react-dnd-html5-backend/dist/cjs",
    "^dnd-core$": "dnd-core/dist/cjs",
  },
  transform: {
    "^.+\\.[t|j]sx|[t|j]s?$": "babel-jest",
    "^.+\\.(ts|tsx)|(js|jsx)$": "ts-jest",
    "^.+\\.(css)$": "./fileTransform.js",
  },
  globals: {
    TextEncoder: require("util").TextEncoder,
    TextDecoder: require("util").TextDecoder,
  },
};

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),

  collectCoverageFrom: [
    "pages/**/*.{js,jsx,ts,tsx}",
    "features/**/*.{js,jsx,ts,tsx}",
    "components/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/reportWebVitals.ts",
    "!**/node_modules/**",
  ],
  transformIgnorePatterns: ["node_modules/(?!(swiper|ssr-window|dom7)/)"],
});
