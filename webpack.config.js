module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path : __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true
    },
    devtool : 'source-map',
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: "babel-loader"
                  },
                  {
                    loader: "react-svg-loader",
                    options: {
                      jsx: true 
                    }
                  }
                ]
              },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}