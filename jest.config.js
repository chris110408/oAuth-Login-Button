var path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname),
    testPathIgnorePatterns: [
        '/node/modules'
    ],
    testURL: 'http://localhost/',
    collectCoverage: true,
    coverageDirectory: './coverage'
};
