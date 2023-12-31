module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    ignorePatterns: [".eslintrc.js"],
    "parser": '@typescript-eslint/parser',
    "plugins": ['@typescript-eslint', "i18next"],
    "extends": [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{ts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "i18next/no-literal-string": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "i18next/no-literal-string": 2
    }
}
