
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "./node_modules/babel-jest"
  }
}