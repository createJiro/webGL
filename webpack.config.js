const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // Webpack4から推奨されるようになったプロパティ
    // developmentかproductionを指定する
    mode: 'development',

    // ビルドの起点になるJSファイル指定する
    entry: {
        app: './src/js/index.js',
        'production-dependencies': ['phaser']
    },

    // ビルド後のファイル出力先とファイル名を指定する
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: '[name].bundle.js'
    },

    // 使用するモジュールLoaderを指定する
    module: {
        // ファイル拡張子毎に使用するLoaderを指定できる
        rules: [
            {
                // 対象の拡張子を正規表現で指定する
                test: /\.js$/,
                // 除外するディレクトリを指定する
                exclude: /node_modules/,
                // 対象のディレクトリを指定する
                include: path.resolve(__dirname, 'src/js/'),
                // Loaderを指定する
                loader: 'babel-loader',
                // Loaderのオプションを指定する
                options: {
                    babelrc: false,
                    presets: [
                        '@babel/preset-env',
                    ]
                }
            }
            ,{
              test: [ /\.vert$/, /\.frag$/ ],
              use: 'raw-loader'
            }
        ]
    },

    // 使用するプラグインを指定する
    plugins: [
        // サーバー起動中でも編集したファイルを上書きロードしてくれる
        new WriteFilePlugin(),
        // JSファイル以外をビルド先にコピーしてくれる
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/index.html'),
                to: path.resolve(__dirname, 'build')
            },
            {
                from: path.resolve(__dirname, 'assets', '**', '*'),
                to: path.resolve(__dirname, 'build')
            }
        ]),
        // WebGLを使用するための設定
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),
    ],

    // 開発用サーバーの設定
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 9000
    },

    // 複数のエントリーポイントで利用している共通モジュールを外出しして出力するための設定
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial'
        }
    }
}