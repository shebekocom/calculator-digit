const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
      }),
    ];

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'style-[hash:8].css',
        }),
      );
    }
    return plugins;
  };
  return {
    mode: isProd ? 'production' : isDev && 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? 'script/script.js' : 'script/bundle-[hash:8].js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 4200,
    },
    devtool: isDev ? 'source-map' : '',
    module: {
      rules: [
        // Loading Images
        {
          test: /\.(svg|jpg|png|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name]-[sha1:hash:7].[ext]',
                outputPath: './assets/img',
                useRelativePath: true,
              },
            },
          ],
        },
        // Loading Fonts
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './assets/fonts',
                useRelativePath: true,
              },
            },
          ],
        },
        // Loading CSS
        {
          test: /\.css$/,
          use: getStyleLoaders(),
        },
        // Loading SCSS
        {
          test: /\.s[ac]ss$/,
          use: [...getStyleLoaders(), 'sass-loader'],
        },
        // loading Fix in code
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            failOnError: true,
          },
        },
        // Loading JS
        {
          test: /\.(js|jsx|ts)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: getPlugins(),
  };
};
