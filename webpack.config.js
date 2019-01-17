const path =  require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // loader: 'loader name'
                use: [ //Loade using moltiple loaders (Loaded in reverse order)
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // ... configure plugin (Not require in this case)
        })
    ]
}