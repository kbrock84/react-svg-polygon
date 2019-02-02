const path = require("path");

console.log(path.resolve(__dirname, "./src"));

module.exports = {
  roots: [path.resolve(__dirname, "./src")],
  displayName: "local",
  testMatch: ["**/src/*.test.js"],
  testURL: "http://localhost"
};
