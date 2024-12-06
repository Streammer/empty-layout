const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		main: './src/js/main.js',
		'article-detail': './src/js/article-detail.js',
		'article-parent': './src/js/article-parent.js',
		'about-us': './src/js/about-us.js',
		sustainability: './src/js/sustainability.js',
		faq: './src/js/faq.js',
		'faq-dog': './src/js/faq-dog.js',
		breed: './src/js/breed.js',
		'breed-detail': './src/js/breed-detail.js',
		'breed-detail-v2': './src/js/breed-detail-v2.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
