const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin")

var config = {
   entry: './component/ts/root.tsx',
   output: {
      filename: './output/bundle.js',
   },
   devtool: 'source-map',
   devServer: {
      inline: true,
      port: 8888,
   },
   node: {
	  fs: "empty",
	  net: "empty",
	  tls: "empty"
  },
  devtool: "#eval-source-map",
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
		 {
			test: /\.scss$/,
			use: [
			{loader: "style-loader"},
			{loader: "css-loader" },
			{loader: "sass-loader"}]
		 },
		 {
			test: /\.tsx$/,
            exclude: /node_modules/,
            loader: 'ts-loader',

		 }
      ]
   },
   plugins: [
     new webpack.DefinePlugin({
           'process.env.NODE_ENV': '"production"'
         }),
         new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
         new webpack.optimize.AggressiveMergingPlugin(),
         new webpack.optimize.UglifyJsPlugin({
           mangle: true,
           compress: {
             warnings: false, // Suppress uglification warnings
             pure_getters: true,
             unsafe: true,
             unsafe_comps: true,
             screw_ie8: true
     }
   })
 ]
}
module.exports = config;
