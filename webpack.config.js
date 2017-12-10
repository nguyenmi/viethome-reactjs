var webpack = require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './node_modules/slick-carousel/slick/slick-theme.css',
    './node_modules/slick-carousel/slick/slick.css',
    './node_modules/slick-carousel/slick/slick.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.js',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery'
    })
  ],
  resolve: {
    root: __dirname,
    alias: {

      // HomePage: 'app/components/HomePage.js',
      HomePage: 'app/components/pages/HomePage.js',
      NewPage: 'app/components/pages/NewPage.js',
      VideoPage: 'app/components/pages/VideoPage.js',
      DetailVideo: 'app/components/pages/DetailVideo.js',
      DetailNews: 'app/components/pages/DetailNews.js',
      Home: 'app/components/modules/home/Home.js',
      SeemoreVideo: 'app/components/modules/home/SeemoreVideo.js',
      MenuHome: 'app/components/modules/home/MenuHome.js',
      Advertisement: 'app/components/modules/home/Advertisement.js',
      News: 'app/components/modules/home/News.js',
      Slider: 'app/components/modules/home/Slider.js',
      Video: 'app/components/modules/home/Video.js',
      ContentHome: 'app/components/modules/home/ContentHome.js',
      NewUpdate: 'app/components/modules/home/NewUpdate.js',
      ContentNew: 'app/components/modules/home/ContentNew.js',
      Article: 'app/components/modules/home/Article.js',
      ArticleLeft: 'app/components/modules/home/article/ArticleLeft.js',
      NewsWorld: 'app/components/modules/home/news/NewsWorld.js',
      IndexNewUpdate: 'app/components/modules/home/news/IndexNewUpdate.js',
      RelatedVideo: 'app/components/modules/news/RelatedVideo.js',
      IndexNews: 'app/components/modules/news/IndexNews.js',
      SliderNews: 'app/components/modules/news/SliderNews.js',
      CateView: 'app/components/modules/news/CateView.js',
      Picture: 'app/components/modules/news/Picture.js',
      IndexVideo: 'app/components/modules/videos/IndexVideo.js',
      MenuVideo: 'app/components/modules/videos/MenuVideo.js',
      IndexDetailNews: 'app/components/modules/detailnews/IndexDetailNews.js',
      MenuDetailNews: 'app/components/modules/detailnews/MenuDetailNews.js',
      UpdateDetailNews: 'app/components/modules/detailnews/UpdateDetailNews.js',
      IndexDetailVideos: 'app/components/modules/detailvideos/IndexDetailVideos.js',
      ListDetailVideos: 'app/components/modules/detailvideos/ListDetailVideos.js',
      Regester: 'app/components/modules/account/Regester.js',
      Login: 'app/components/modules/account/Login.js',
      Account: 'app/components/Account.js',
      AccountLogin: 'app/components/AccountLogin.js',
      AccountRegester: 'app/components/AccountRegester.js',
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      Header: 'app/components/layouts/Header.js',
      Footer: 'app/components/layouts/Footer.js',
      Title: 'app/components/layouts/Title.js',
      Account: 'app/components/layouts/Account.js',
      Transaction: 'app/components/Transaction.js',
      SignIn: 'app/components/SignIn.js',
      AccountInfo: 'app/components/AccountInfo.js',
      Notification: 'app/components/Notification.js',
      PostData: 'app/components/service/PostData.js',

      Admin: 'app/components/Admin.js',
      AdminHeader: 'app/components/admin/layouts/AdminHeader.js',
      AdminNavbar: 'app/components/admin/layouts/AdminNavbar.js',
      AdminIndex: 'app/components/admin/pages/index/AdminIndex.js',
      Pagination: 'app/components/admin/pages/index/Pagination.js',
      IndexCate: 'app/components/admin/pages/index/IndexCate.js',
      IndexPost: 'app/components/admin/pages/index/IndexPost.js',
      ListCate: 'app/components/admin/pages/cate/ListCate.js',
      CreateCate: 'app/components/admin/pages/cate/CreateCate.js',
      EditCate: 'app/components/admin/pages/cate/EditCate.js',
      SearchCate: 'app/components/admin/pages/cate/SearchCate.js',
      showCate: 'app/components/admin/pages/cate/showCate.js',
      ListPost: 'app/components/admin/pages/post/ListPost.js',
      CreatePost: 'app/components/admin/pages/post/CreatePost.js',
      EditPost: 'app/components/admin/pages/post/EditPost.js',
      DeleteCate: 'app/components/admin/pages/post/DeleteCate.js',
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          outputPath: '/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
