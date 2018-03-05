const path = require('path');

console.log("-----------------------------")
console.log(path.resolve(__dirname, '..', 'tsconfig.js'))
console.log("-----------------------------")


module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
          {
              test: /\.[tj]sx?$/,
              use: [
                  {
                      loader: 'awesome-typescript-loader',
                      options: {
                          configFileName: path.resolve(__dirname, '..', 'tsconfig.js'), // TODO gets ignored -.-
                          useBabel: true
                      }
                  }
              ],
          }
      ]
    }
};