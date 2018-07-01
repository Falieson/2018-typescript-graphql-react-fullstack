module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "setupTestFrameworkScriptFile": "<rootDir>/jest/jest.setup.js",
  "testPathIgnorePatterns": ["/node_modules/", "/.reference/", "/build/", "/scripts/"],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec)s?)\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "globals": {
    "ts-jest": {
      "enableTsDiagnostics": true,
      "skipBabel": true,
      "tsConfigFile": "tsconfig.jest.json"
    }
  },
  "moduleNameMapper": {
    "\\.(css|less)$": "identity-obj-proxy", // mock css
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/mocks/fileMock.js",   // mock files
  },
}