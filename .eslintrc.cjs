module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true, // allow describe/test/expect/jest globals in tests
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
};
