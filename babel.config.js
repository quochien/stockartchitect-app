module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        // {
        //   "extensions": [".js", ".jsx",".ts",".tsx" ".es", ".es6", ".mjs"]
        // },
        // "extensions": [".ios.js", ".android.js", ".js", ".json"]
        // root: ["."],
        alias: {
          test: ["./test"],
          underscore: ["lodash"],
          "@Components": ["./src/Shared/Core/Frameworks/Components"]
        }
        // "cwd": "babelrc"
      }
    ]
  ]
};
