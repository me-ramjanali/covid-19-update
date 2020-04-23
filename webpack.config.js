// Resolve Webpack alias in Webstorm (https://gist.github.com/zmts/bd620cd473e6c96e8884f03d0cee7f15)
module.exports = {
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass|sss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
