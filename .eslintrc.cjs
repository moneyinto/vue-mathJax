module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/vue3-essential",
        "@vue/standard",
        "@vue/typescript/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["error", 4],
        semi: ["error", "always"],
        quotes: "off",
        "space-before-function-paren": [
            "error",
            {
                named: "never",
                anonymous: "never",
                asyncArrow: "always"
            }
        ],
        "dot-notation": [0, { allowKeywords: false, allowPattern: "" }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-unmodified-loop-condition": "off",
        "n/no-callback-literal": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": ["off"],
        "vue/multi-word-component-names": ["off"],
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-eval": "off"
    }
};
