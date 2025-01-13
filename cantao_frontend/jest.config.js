module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Usar ts-jest para arquivos TS/TSX
    "^.+\\.(js|jsx)$": "babel-jest", // Usar babel-jest para arquivos JS/JSX
  },
  testEnvironment: "jsdom", // Ambiente para testar componentes React
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Extensões que o Jest pode resolver
  setupFilesAfterEnv: ["./jest.setup.js"],
};
