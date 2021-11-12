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
    quotes: [0, "double"], //使用双引号，关闭
    indent: ["error", 4], //缩进
    semi: 0,
    "space-before-function-paren": "off",
    "no-unused-vars": "off", //未被使用的变量
    "vue/html-self-closing": "off"
  }
};
