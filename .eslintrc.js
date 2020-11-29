module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 1,  // 修改提示未使用变量为警告，而不是错误
    'import/no-unresolved': 0   // 不知道为什么eslint没有正确识别文件系统，暂且关闭
  }
};
