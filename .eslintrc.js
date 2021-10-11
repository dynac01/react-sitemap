module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
        jasmine: true
    },
    ignorePatterns: ["build"],
    extends: ["plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "no-plusplus": "off",
        "react/prop-types": 0,
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        indent: "off",
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx"],
            },
        ],
        "no-underscore-dangle": 0,
        "no-nested-ternary": "off",
    },
}
