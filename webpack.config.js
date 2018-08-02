const path = require("path");

//creates index html file for us. Dist folder with index.html file is created because of this
const htmlwebpackplugin = require("html-webpack-plugin"); 

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: './src/index.html'
        })
    ]
};