const glob = require("glob");
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const pkg = require("./package.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let entryJS = ["./src/lagunite.js"];
let entryCSS = [];
let globalEntry = [];

glob.sync("./src/css/**/*.css").forEach((file) => {
  entryCSS.push(`./${file}`);
});

entryCSS.sort();
globalEntry = entryCSS.concat(entryJS);
console.log(globalEntry);

const configProduction = {
  target: "web",
  entry: globalEntry,
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
@ Desc: ${pkg.description}`,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "lagunite.css",
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        // CSS
        minimizerOptions: {
          preset: ["default", {}],
        },
      }),
      new TerserPlugin({
        //JS
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {},
  stats: "minimal", // Console log outputs for results
};

const configDevelop = {
  target: "web",
  entry: globalEntry,
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
        postcss: [autoprefixer()],
      },
    }),
    new MiniCssExtractPlugin({
      filename: "lagunite.css",
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: false,
          mangle: false, // turn off name mangling
          format: {
              beautify: true, // beautify output (it won't be minified)
              comments: true, // preserve comments
          },
        },
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {},
  stats: "minimal", // Opcional, muestra estadísticas de construcción más limpias en la consola
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    return configDevelop;
  } else if (argv.mode === "production") {
    return configProduction;
    
  } else {
    throw new Error("Specify env");
  }

  return configDevelop;
};
