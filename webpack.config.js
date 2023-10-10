const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
	mode: "development",
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				//test: path.resolve(__dirname, "src/scss/*"),
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"]
			}
		]
	},
	devtool: "source-map"
}
