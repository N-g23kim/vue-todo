const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // 배포용:production
    entry: './src/main.js',

    // 다 합쳐서 어디에 합친 파일을 생성할지
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist') // __dirname 현재 경로, dist 폴더 이름
    },

    module: {
      // rules에 의해 적용 또는 변환되는 내용이 entry로 설정한 파일에 삽입
      rules: [
        { test: /\.js$/, use: 'babel-loader' }, // ES6+ 구문을 ES5로 변환
        {
          test: /\.vue$/,
          use:[
              {
                  loader: 'vue-loader',
                  options: {
                      loaders: {
                          'js': 'babel-loader' 
                      },
                  }
              }
          ]
        }, // .vue 파일을 자바스크립트로 로 변환합
        {
          test: /\.s[a|c]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }, 
          ]
        }
      ]
    },

    // 확장자 없이 파일 가져오기 가능
    resolve: {
      extensions: ['*', '.js', '.vue', '.json'],
      alias: {
        vue: 'vue/dist/vue.js'
      }
    },

    devServer: {
      open: true, // webpack-dev-server을 실행할 때 브라우저 창을 자동으로 열기
      hot: true // Webpack에서 사용 허용
    },

    // 사용되는 플러그
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),

      new VueLoaderPlugin(),

      // CSS file을 dist 폴더로 추출
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),

      // build 할 경우 삭제할 폴더 지정
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
      }),

      // 프로그램을 작성하고 데이터를 추가할 때마다 매번 데이터가 재설정되는 현상 방지
      new webpack.HotModuleReplacementPlugin() 
    ]
}