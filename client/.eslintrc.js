module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/script-indent": ["error", 2, { "baseIndent": 1 }]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    //
    // Tests variables
    //
    afterAll: 'readonly',
    afterEach: 'readonly',
    beforeAll: 'readonly',
    beforeEach: 'readonly',
    describe: 'readonly',
    xdescribe: 'readonly',
    expect: 'readonly',
    it: 'readonly',
    xit: 'readonly',
    jest: 'readonly',
    cy: 'readonly',
    context: 'readonly',
    before: 'readonly',
    //
    // bdd-lazy-vars
    //
    def: 'readonly',
    get: 'readonly',
    sharedExamplesFor: 'readonly',
    includeExamplesFor: 'readonly',
    itBehavesLike: 'readonly',
    subject: 'readonly',
    fdescribe: 'readonly',
    fit: 'readonly'
  },
};