/**
 * Stylelint configuration for basic CSS linting.
 * We extend the "standard" config which enforces:
 * - Valid CSS syntax
 * - Consistent formatting and conventions
 */

/** @type {import("stylelint").Config} */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-scss"],

  rules: {
    // Disallow invalid hex colors
    "color-no-invalid-hex": true,

    // Avoid empty rule blocks
    "block-no-empty": true,

    // Allow camelCase class
    "selector-class-pattern": null,

    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "use",
          "forward",
          "mixin",
          "include",
          "function",
          "custom-variant",
          "theme",
          "apply",
        ],
      },
    ],

    // Allow rgba
    "color-function-notation": "modern",
    // "color-function-alias-notation": "legacy",

    // Allow percentages to be decimal numbers rather than strings
    "alpha-value-notation": "number",

    // Skip scss/no-global-function-names
    "scss/no-global-function-names": null,

    "scss/at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["custom-variant", "theme", "apply"] },
    ],

    // Allow comments without spaces
    "comment-whitespace-inside": null,

    // Allow declarations without empty lines before
    "declaration-empty-line-before": null,

    // Allow string notation for imports
    "import-notation": "string",
  },
};
