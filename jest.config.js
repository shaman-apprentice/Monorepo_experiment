module.exports = {
    setupTestFrameworkScriptFile: "<rootDir>/testSetup.js",
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(gui_elements|calculator_lib))/",
    ],
    transform: {
        "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.tsx?$": "ts-jest"
    },
};