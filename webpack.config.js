var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var IMG_PATH = path.resolve(ROOT_PATH, 'imgs');
var DEMO_PATH = path.resolve(ROOT_PATH, 'demo');

module.exports = {
    entry: DEMO_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".es6", ".css", ".scss", ".png", ".jpg", ".jpeg"],
        alias: {
            'components': path.join(ROOT_PATH, '/components/index.js'),
            'utils': path.join(ROOT_PATH, '/utils'),
            'mock': path.join(ROOT_PATH, '/mock'),
            'scss': path.join(ROOT_PATH, '/scss')
        }
    },

    plugins: [
        //new HtmlwebpackPlugin({
        //    title: 'Hello world app'
        //})
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        //contentBase: ''
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: ROOT_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000',
                include: ROOT_PATH
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: ROOT_PATH,
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['react', 'stage-0', 'es2015']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                include: ROOT_PATH
            }
        ]
    }
}
