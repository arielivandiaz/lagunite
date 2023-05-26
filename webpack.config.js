const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const pkg = require("./package.json");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  target: "web",
  entry:  ['./src/lagunite-config.css', './src/lagunite.css', "./src/lagunite.js"],
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
      }),
      new MiniCssExtractPlugin({
        filename: 'lagunite.css',
      }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
            
            },
          ],
        },
      }),
      new TerserPlugin({
        extractComments: false,
      })
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
  },
  stats: 'minimal', // Opcional, muestra estadísticas de construcción más limpias en la consola
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
  } else if (argv.mode === "production") {
  } else {
    throw new Error("Specify env");
  }

  return config;
};
