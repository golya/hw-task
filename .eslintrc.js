module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "standard-with-typescript",
      "plugin:react/recommended"
  ],
  "overrides": [
      {
          "env": {
              "node": true
          },
          "files": [
              ".eslintrc.{js,cjs}"
          ],
          "parserOptions": {
              "sourceType": "script"
          }
      }
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "quotes": ["error", "single"],
      "indent": ["error", 2],
      "no-multi-spaces": ["error"],
      "semi": ["error", "never"],
      "indent": [
          "error",
          2,
          {
              "SwitchCase": 1
          }
      ],
      "generator-star-spacing": ["error", { "before": false, "after": true }],
      "@typescript-eslint/no-misused-promises": [
          "off"
      ],
  }
}
