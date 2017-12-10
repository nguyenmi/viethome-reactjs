var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var HomePage = require('HomePage');
var Account = require('Account');
var Main = require('Main');
var NewPage = require('NewPage');
var DetailNews = require('DetailNews');
var VideoPage = require('VideoPage');
var DetailVideo = require('DetailVideo');
var AccountLogin = require('AccountLogin');
var Login = require('Login');
var AccountRegester = require('AccountRegester');
var ListCate = require('ListCate');
var CreateCate = require('CreateCate');
var EditCate = require('EditCate');
var SearchCate = require('SearchCate');
var ListPost = require('ListPost');
var CreatePost = require('CreatePost');
var EditPost = require('EditPost');
var Admin = require('Admin');
var AdminIndex = require('AdminIndex');



require('style!css!sass!./css/all.scss');
require('style!css!sass!./css/responsive.scss');
require('style!css!sass!./css/admin/alladmin.scss');
$(document).ready(() => $(document).foundation());

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path="/" component={Main}>
      <IndexRoute component={HomePage}/>
      <Route path="news" component={NewPage}/>
      <Route path="detailnews/:id" component={DetailNews}/>
      <Route path="video" component={VideoPage}/>
      <Route path="detailvideo/:id" component={DetailVideo}/>
    </Router>
    <Router path="login" component={AccountLogin}>
    </Router>
    <Router path="register" component={AccountRegester}>
    </Router>
    <Router path="/admin" component={Admin}>
      <IndexRoute component={AdminIndex}/>
      <Route path="category" component={ListCate}/>
      <Route path="createcategory" component={CreateCate}/>
      <Route path="editcategory/:id" component={EditCate}/>
      <Route path="search" component={SearchCate}/>
      <Route path="post" component={ListPost}/>
      <Route path="createpost" component={CreatePost}/>
      <Route path="editpost/:id" component={EditPost}/>
    </Router>
  </Router>,
  document.getElementById('root')
);
