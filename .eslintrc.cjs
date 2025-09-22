module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,   // ✅ allow Node globals like "process"
    jest: true,   // ✅ allow Jest globals like "describe", "test", "expect"
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn", // just warn if vars aren’t used
  },
};
