const path = require('path');
const webpack = require('webpack');
const inputdir = "typescript";
const tsmaindir = path.join(__dirname, inputdir, "main")

module.exports = {
    entry: [path.join(tsmaindir, "preload.ts"), "babel-polyfill", path.join(tsmaindir, "index.ts")],
    output: {
        path: destdir,
        filename: 'app.js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            // typescript to ES6 to ES5
            { test: /\.tsx?$/, loader: "babel-loader!ts-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                // image loader
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        function () {
            this.plugin('watch-run', (watching, callback) => { // show message at starting build
                console.log('\033[36m' + 'Begin compile at ' + new Date() + ' \033[39m')
                callback()
            })
        },
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: require('uglify-save-license')
            }
        })
    ]
};