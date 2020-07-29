module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@schemas': './src/schemas',
        '@controllers': './src/controllers',
        '@services': './src/services',
        '@middlewares': './src/middlewares',
        '@validators': './src/validators',
        '@utils': './src/utils',
        '@enums': './src/enums',
        '@exceptions': './src/exceptions',
        '@errors': './src/errors',
        '@configs': './src/configs',
        '@logger': './src/logger'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}