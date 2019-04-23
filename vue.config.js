let path = require('path');
let glob = require('glob');
let CompressionWebpackPlugin = require('compression-webpack-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

// 配置pages多页面获取当前文件夹下的html和js
let getEntry = globPath => {
	let entries = {};
	let basename;
	let tmp;
	let pathname;

	glob.sync(globPath).forEach(entry => {
		basename = path.basename(entry, path.extname(entry));
		// console.log(entry)
		tmp = entry.split('/').splice(-3);
		// console.log(tmp)
		pathname = basename; // 正确输出js和html的路径
		// console.log(pathname)

		entries[pathname] = {
			entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
			template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
			filename: tmp[2]
		};
	});
	return entries;
};

let pages = getEntry('./src/pages/**?/*.html');
console.log(pages);

// 设置不同环境的代理
const ENV = process.env.NODE_ENV;
let target = '';
if (ENV === 'production') {
	// 生产环境
	target = 'aaa.com/';
} else if (ENV === 'test') {
	// 测试环境
	target = 'bbb.com/';
} else {
	// 本地环境
	target = 'xxx.com/';
}

module.exports = {
	outputDir: 'dist',
	lintOnSave: true,
	publicPath: '',
	productionSourceMap: false,
	pages: pages,
	devServer: {
		index: 'home.html', // 默认启动serve 打开page1页面
		open: process.platform === 'darwin',
		host: '',
		port: 8088,
		https: false,
		hotOnly: false,
		proxy: {
			'/api/': {
				target: target,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}, // 设置代理
		before: app => {}
	},
	chainWebpack: config => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap(options => {
				options.limit = 10000;
				return options;
			});
		if (process.env.npm_config_report) {
			config
				.plugin('webpack-bundle-analyzer')
				.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
		}
	},
	configureWebpack: config => {
		Object.assign(config, {
			// 开发生产共同配置
			resolve: {
				extensions: ['.js', '.vue', '.scss'],
				alias: {
					'@': path.resolve(__dirname, './src'),
					assets: path.resolve(__dirname, './src/assets')
				}
			}
		});
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
			config.plugins.push(
				new CompressionWebpackPlugin({
					asset: '[path].gz[query]',
					algorithm: 'gzip',
					test: /\.(js|html|css)$/,
					threshold: 10240,
					minRatio: 0.8
				})
			);
		}
	}
};
