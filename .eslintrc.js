module.exports = {
    extends: [ "@groww-tech/eslint-config" ],
    settings: {
        "import/resolver": {
            "webpack": {
                "config": "./webpack.config.js"
            }
        }
    }
}
