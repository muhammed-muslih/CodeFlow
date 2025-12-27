module.exports = {
  root: true,

  env: {
    node: true,
    es2022: true,
  },

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },

  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],

  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },

  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        js: "always",
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
  },
};
