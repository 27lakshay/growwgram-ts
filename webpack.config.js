require("dotenv").config();

const path = require("path");
const webpack = require("webpack");
const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");

const configJs = require("./src/config/config.js")[process.env.STAGE];
const packageJson = require("./package.json");

const isProd = process.env.STAGE !== "development";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/client.js",
  output: {
    path: path.resolve(__dirname, "build/client"),
    filename: isProd ? `js/[name].[chunkhash:8].js` : `js/[name].js`,
    publicPath: isProd ? "auto" : "/",
  },

  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets/"),
      core: path.resolve(__dirname, "src/core/"),
      common: path.resolve(__dirname, "src/common/"),
      components: path.resolve(__dirname, "src/components/"),
      styles: path.resolve(__dirname, "src/styles/"),
      store: path.resolve(__dirname, "src/store/"),
      utils: path.resolve(__dirname, "src/utils/"),
      routes: path.resolve(__dirname, "src/routes/"),
      views: path.resolve(__dirname, "src/views"),
      ui: path.resolve(__dirname, "src/ui"),
      store: path.resolve(__dirname, "src/store/"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico|mp3)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: "images/[name].[ext]" },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 1000, name: "fonts/[name].[ext]" },
          },
        ],
      },
      ...(isProd
        ? [
            {
              test: /\.css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                },
                {
                  loader: "css-loader",
                  options: { importLoaders: 1, modules: false },
                },
                "postcss-loader",
              ],
            },
          ]
        : [
            {
              test: /\.css$/,
              use: [
                "style-loader",
                { loader: "css-loader", options: { importLoaders: 1 } },
              ],
            },
          ]),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __IS_BROWSER__: "true",
      __STAGE__: JSON.stringify(process.env.STAGE),
      __VERSION__: JSON.stringify(packageJson.version),
      __NAME__: JSON.stringify(packageJson.name),
      __CONFIG__: JSON.stringify(configJs),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new AssetsPlugin({
      filename: "assetsManifest.json",
      path: path.resolve("./build/client"),
      prettyPrint: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
    !isProd
      ? new WebpackBar({
          color: "blue",
          name: "client",
        })
      : new MiniCssExtractPlugin(),
  ].filter(Boolean),
  devServer: {
    hot: true,
    port: 3001,
    historyApiFallback: true,
  },
};
