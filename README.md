Clone it to your machine. run

npm install webpack -w Then open new Terminal (CMD) tab and run "node index"

## React

### Structure
1. Create project
```javascript
  - npm install -g create-react-app
  - create-react-app my-react-app
```
2. Install React + Webpack + Babel
```javascript
  - npm install react react-dom –save
  - npm install babel babel-core babel-loader babel-preset-es2015 babel-preset-react webpack --save-dev
  - npm install -g webpack
```
3. config webpack
``` javascript
var webpack = require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
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
           'app/components/pages/HomePage.js',
           ...
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
```
***
### Webpack
#### What is webpack ?
- webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

#### Install webpack :
  - npm install --save-dev webpack

#### Entry:
 - The entry point for the bundle.
 - Entry: string, array, object
 - if you want to append multiple files that are NOT dependent on each other, you can use the Array format.
 ```javascript
 entry: [
   'script!jquery/dist/jquery.min.js',
   './node_modules/slick-carousel/slick/slick-theme.css',
   './node_modules/slick-carousel/slick/slick.css',
   './node_modules/slick-carousel/slick/slick.min.js',
   'script!foundation-sites/dist/js/foundation.min.js',
   './app/app.js',
 ]
 ```


#### Output
- Output tell Webpack how to write the compiled files to disk.
- Note, that while there can be multiple entry points, only one output configuration is specified.

``` javascript
output: {
  path: __dirname,
  filename: './public/bundle.js'
},
```

- Output Path :simply tells the Webpack where it should store the result
- Output publicPath : is used by several Webpack’s plugins to update the URLs inside CSS, HTML files when generating production builds

``` javascript
output: {
  path: __dirname,
  publicPath: 'http://mycdn.com/',
  filename: './public/bundle.js'
},
```

#### Loader
- An array of automatically applied loaders.
- Each item can have these properties:

 --- test: A condition that must be met

 --- exclude: A condition that must not be met

 --- include: An array of paths or files where the imported files will be transformed by the loader

 --- loader: A string of “!” separated loaders

 --- loaders: An array of loaders as string

``` javascript
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
```
#### Babel Loader
- babel-loader uses “presets” configuration to know how to convert ES6 to ES5 and also how to parse React’s JSX to JS.
- We can pass the configuration via “query” parameter
``` javascript
  {
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react', 'stage-0']
    },
    test: /\.jsx?$/,
    exclude: /node_modules/
  }
```

#### Loader and Plugins
- Loader work at the individual file level during or before
- Plugins are additional node modules that usually work on the resulting bundle.
- Plugins work at bundle or chunk level and usually work at the end of the bundle generation process
``` javascript
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery'
    })
  ]
```
***
### React-router
### What is a React router
- React Router : is a library used to create routes, which allow users to redirect websites to different pages without having to reload the entire site, which makes the user experience better by reducing it. get website loading time.

#### Install react router
- npm install react-router –save

#### import
```javascript
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
```
#### link router
``` javascript
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
  <Router path="regester" component={AccountRegester}>
  </Router>
  <Router path="/admin" component={Admin}>
    <IndexRoute component={AdminIndex}/>
    <Route path="category" component={ListCate}/>
    <Route path="createcategory" component={CreateCate}/>
    <Route path="editcategory/:id" component={EditCate}/>
    <Route path="search" component={SearchCate}/>
    <Route path="demo" component={showCate}/>
    <Route path="post" component={ListPost}/>
    <Route path="createpost" component={CreatePost}/>
    <Route path="editpost/:id" component={EditPost}/>
  </Router>
</Router>,
```
***

### Component
- Component :  is a functionally independent part of any system. It performs some function and may require some input or produce some output. A component in software is often represented by classes.

``` javascript
import React from 'react';

class HomePage extends React.Component{
  render(){
    return (
      < Home/>
    )
  }
}

module.exports = HomePage;
```
***
### Component Lifecycle
#### Constructor
- This function sets the state for the component.
- The use of super (props) is to be able to use this.props within the scope of this constructor function
``` javascript
  constructor(props, context) {
    super(props, context);
    this.state = {
      List: []
    }
  }
```

#### ComponentWillMount() ;
- Performing some tasks, this function is called once on both the client and the server before rendering.

#### ComponentDidMount();
-Performing some tasks, this function is called once only on the client, after rendering.
- This function is very useful when you work with Map, because the map is only rendered when there are nodes in the DOM

#### ComponentWillUnmount();
- Made only once , When the component is unmounted, it is called before the component is unmounted.
- This function is useful when you need to delete timers that are no longer in use

#### ComponentWillReceiveProps(nextProps);
- This operation will follow to each when props changes

#### ShouldComponentUpdate(nextProps, nextState);
- Performs when state and props change
- This function returns the result true / false, you will need to use this function to handle the component update.

#### componentWillUpdate(nextProps, nextState);
- This function is based on the result of the above function (shouldComponentUpdate)
- If the function returns false, then React will not call this function

#### componentDidUpdate(prevProps, prevState) :
- This function executes after the component is rendered, resulting from the componentWillUpdate

#### State();
- The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object

``` javascript
  this.state = {
    hotview: [],
    categoryList: []
  }
```

#### Setstate();
- Changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event - Declare variable type for props
``` javascript
  this.setState = ({
    home: response.data
  })
```

#### PropType :
- Declare the default value for the props
``` javascript
  User.propTypes = {}
```

#### DefaultProps :
- Declare variable type for props
``` javascript
  User.defaultProps = {}
```
***
### Axios
#### what is axios:
-  Axios is a HTTP Client based on Promise. Basically, it provides an API for processing XHR (XMLHttpRequests)

#### Install
```javascript
npm install axios
```

#### import axios
``` javascript
  import axios from 'axios';
```

#### Performing a GET request
``` javascript
  getCategoryList() {
    axios.get('http://49.156.53.36:3000/api/categories')
    .then(response => {
      if (response && response.data) {
        this.setState({
          categoryList: response.data
        },() => {
          this.getHotView();
        })
      }
    })
  }
```

#### Performing a POST request
``` javascript
  createCategory() {
    axios({
      method: 'post',
      url: 'http://49.156.53.36:3000/api/categories',
      data: {
        title: this.state.title,
        description: this.state.description
      }
    })
    .then(response => {
    })
    .catch(error => {
    })
  }
```
...
****
