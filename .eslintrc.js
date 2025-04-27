module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "unused-imports"],
  rules: {
    // Core ESLint
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",

    // Plugin: unused-imports
    "unused-imports/no-unused-imports": "off",
    "unused-imports/no-unused-vars": "off",

    // React rules
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/no-unknown-property": "off",
    "react/jsx-key": "off",

    // React Hooks rules
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,s}?(x)", "**/tests/**/*.test.{j,s}?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
