const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, "src")
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/static/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    target: 'web',
    devtool: 'cheap-module-eval-sorce-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    
    ],
    module: {
        rules: [
            //for jsx loader
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'build')
                ],
                use: ['react-hot-loader',
                    {
                        loader: 'babel-loader',
                    }
                    ]
            },
            //for sass loader
            {
                test: /\.scss?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'build')
                ],
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }
                ]
            }
        ]
    },
    //options for resolving module requests
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.jsx', '.json', '.css', '.sass'],
        alias: {
            Root: path.resolve(__dirname, 'src/Root.jsx')
        }

    }

};