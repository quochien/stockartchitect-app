module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],

  plugins: ["react", "@typescript-eslint", "prettier", "module-resolver"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  rules: {
    "module-resolver/use-alias": 2,
    "prettier/prettier": ["error", { singleQuote: true }],
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "prettier/prettier": ["error", { singleQuote: false }],
    "max-len": ["error", { code: 120 }],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
    "no-return-assign": ["off"],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    // "import/imports-first": ["error", "absolute-first"],
    // "import/newline-after-import": "error",
    "max-lines-per-function": [
      "error",
      { max: 20, skipBlankLines: true, skipComments: true }
    ],
    "one-var": "off",
    "no-multi-assign": "off",
    "no-nested-ternary": "off",
    "global-require": "off",

    "import/no-extraneous-dependencies": "off",
    "import/first": "off",

    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "off",
    "react-native/no-raw-text": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off"

    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    "import/extensions": [".js", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"]
      }
      // "babel-module": {}
    },
    react: {
      pragma: "React",
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
