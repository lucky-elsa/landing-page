const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        filename: "bundle.js",
    },

    mode: "development",

    plugins: [
        new HtmlWebpackPlugin({
            template: `./src/index.html`,
            filename: "index.html",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
                enforce: "pre",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    {
                        loader: "resolve-url-loader",
                        options: { sourceMap: true },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require.resolve("sass"),
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
};
