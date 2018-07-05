module.exports={
	entry: '.src/index.js',
	output:{
		path: __dirname+ '/public',
		filename: 'bundle.js'
	},
	module:{
		loaders:[
		{
			test: /\.js$/,//run every file have .js
			loaders: 'babel-loader'
		}
		]
	}
};