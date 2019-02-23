module.exports = {
    entry: './src/index.js', 
    output: { 
      filename: 'index.js',
      path: `${__dirname}/` 
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
        }
    },
}