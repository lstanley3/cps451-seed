module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module", // <-- Add this for ESM
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
};
