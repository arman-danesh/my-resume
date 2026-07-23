// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './source/ts/app.ts',
        styles: './source/sass/style.scss',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'js'),
        clean: false,
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                            transpileOnly: false,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            // Add Sass/SCSS support with CSS extraction
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            // Handle Bootstrap fonts and other assets
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '../fonts/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css',
        }),
    ],
    devtool: 'source-map',
    stats: {
        warnings: false,
    },
};