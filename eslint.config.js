export default [
  {
    files: ["public/js/code.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "semi": ["warn", "always"]
    },
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        alert: "readonly",
        fetch: "readonly"
      }
    }
  }
];
