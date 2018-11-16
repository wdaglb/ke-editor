const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',
    entry: './src/editor/index.js',
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'KeEditor.js',
        libraryTarget: 'umd',
        libraryExport: "default"
        // library: 'KeEditor'
    },
    devtool: "source-map",
    externals: {
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
