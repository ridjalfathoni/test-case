# <a href='https://github.com/mikechabot/test-case'><img src='https://raw.githubusercontent.com/mikechabot/test-case/gh-pages/assets/img/header_photo.png' alt='logo' aria-label='https://github.com/mikechabot/test-case' /></a>

A slightly opinionated yet dead simple boilerplate for ReactJS, Webpack 4, and React Router v4.

:heart: Webpack 4
<br/>
:heart: Code splitting
<br/>
:heart: React Router
<br/>
:heart: Redux 

<div align="center"> 
  <a href="https://travis-ci.org/mikechabot/test-case">
    <img src="https://travis-ci.org/mikechabot/test-case.svg?branch=master" alt="build status" />
  </a>
  <a href="https://david-dm.org/mikechabot/test-case">
    <img src="https://david-dm.org/mikechabot/test-case.svg" alt="dependency status" />
  </a>
  <a href="https://github.com/mikechabot/test-case/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="prs welcome" />
  </a>
</div>



----

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Custom Configuration](#custom-config)

## <a id="live-demo">Live Demo</a>

 http://mikechabot.github.io/test-case
 
----

## <a id="features">Features</a>

#### Build Process
 * Built with [webpack 4](https://webpack.js.org/configuration/)
 * Code splitting at the [react-router v4](https://github.com/reactjs/react-router) level
 * Supports ES6 via [Babel](https://babeljs.io/) transpiling 

#### State Management
* [redux-entity](https://github.com/mikechabot/redux-entity) for domain entity management
* [redux-thunk](https://github.com/gaearon/redux-thunk) for [asynchronous actions](https://github.com/mikechabot/test-case/blob/master/src/redux/actions/thunks.js#L6)
* [redux-logger](https://github.com/theaqua/redux-logger) for capturing actions

#### Routing
* [react-router v4](https://github.com/reactjs/react-router) for client-side [routing](https://github.com/mikechabot/test-case/blob/master/src/Root.jsx#L5)

#### HTTP
* [Customizable](https://github.com/mikechabot/test-case/blob/master/src/services/data/ajax-service.js#L8), [Promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) HTTP support via [Axios](https://github.com/mzabriskie/axios)
* Utilizes a [a generic data service](https://github.com/mikechabot/test-case/blob/master/src/services/data/data-access-service.js#L48) to easily fetch data
* Example of [implementing the data service](https://github.com/mikechabot/test-case/blob/master/src/services/domain/example-domain-service.js#L17)

#### Styling
* Supports [SCSS & SASS](http://sass-lang.com/) syntax
* Browser compatibility via [autoprefixing](https://github.com/postcss/autoprefixer) and [normalize.css](https://necolas.github.io/normalize.css/)
* [Bulma](https://bulma.io/documentation/overview/start/) for out-of-the-box styling
* [glamorous](https://glamorous.rocks) for CSS-in-JS styling

#### Develop & Deploy
* Environmental configurations for both webpack and redux
  * **Dev**: [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/). `redux-logger` enabled
  * **Prod**: [Express](http://expressjs.com/) server with `redux-logger` disabled

#### Testing
* Tested with [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
* Coverage support via [nyc](https://istanbul.js.org)
* [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html) for component testing
* [Sinon.JS](http://sinonjs.org/) for mocking, stubbing & spying

----

## <a id="getting-started">Getting Started</a>

1. `$ git clone https://github.com/mikechabot/test-case.git`
2. `$ npm install`
3. Launch environment:
   *  **Production**: `$ npm start`
   *  **Development**: `$ npm run dev`   
   > Available at http://localhost:3060
4. Build assets for production:
   * `$ npm run build:prod`
5. Execute tests:
   * `$ npm test`

----

## <a id="custom-config">Custom Configuration</a>

Use [`cross-env`](https://github.com/kentcdodds/cross-env) or a comparable library/command to set the `ENV_CONFIG_PATH` to the path of your JSON configuration file:

`$ cross-env ENV_CONFIG_PATH=/path/to/config.json npm start`

> **Note**: This path is made available to Webpack **only**, however the contents of the file are stamped on a global variable during the build process (`process.env.APP_CONFIG`, see [webpack.config.js](https://github.com/mikechabot/test-case/blob/master/webpack.config.js#L44)), which is then accessible via the [ConfigService](https://github.com/mikechabot/test-case/blob/master/src/services/common/config-service.js#L8).

If your configuration is loaded successfully, you can expect to see the following indicator during startup:

```
** Using custom configuration located at "/path/to/config.json" **
```

#### Example

Using configuration file @ `D\:\_workspaces\foo.json`

    mikec@Krait MINGW64 /d/_workspaces/test-case (master)
    $ cross-env ENV_CONFIG_PATH="D\:\_workspaces\foo.json" npm start

    > test-case@2.5.0 start D:\_workspaces\test-case
    > npm run prod

    > test-case@2.5.0 prod D:\_workspaces\test-case
    > npm run build:prod && npm run start-server

    > test-case@2.5.0 build:prod D:\_workspaces\test-case
    > cross-env NODE_ENV=production webpack --progress --colors

    ** Using custom configuration located at "D:\_workspaces\foo.json" **

    Hash: 32bbf23a46e7ac19741a
    Version: webpack 3.5.5
    Time: 8711ms
             Asset     Size  Chunks                    Chunk Names
         bundle.js   563 kB       0  [emitted]  [big]  main
    css/bundle.css  1.68 kB       0  [emitted]         main
        index.html  1.58 kB          [emitted]

