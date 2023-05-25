const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const pkg = require("./package.json");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  target: "web",
  entry: "./src/lagunite.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "lagunite.js",
    library: "Lagunite",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "./dist")],
    }),
    new webpack.BannerPlugin({
      banner: `@ Name: ${pkg.name}
@ Version: ${pkg.version}
@ Author: ${pkg.author}
@ Desc: ${pkg.description} `,
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer(),
          ]
        }
      })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader', 'postcss-loader'] 
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
  } else if (argv.mode === "production") {
  } else {
    throw new Error("Specify env");
  }

  return config;
};
