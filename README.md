TODO modify this file.

# About

Sample app for developing with below tools set.

* Client
  * Language
    * typescript
  * Framework & Library
    * react
    * redux
    * redux-saga
    * axios
  * Task runner
    * webpack
  * Others
    * sass(scss)
    * babel-polyfill
* Server    
  * play2.5(scala)

This is a simple Todo List App. 
Born from redux sample app(http://redux.js.org/docs/basics/ExampleTodoList.html).

# Description

## Client Side

* Compile typescript to ES6, and transpile ES6 to ES5 with babel. Use babel-polyfill.

# Setup

Install below.

* sbt
* nodejs
* typings
```
npm install typings --global
```

# Usage

## Develop

Start webpack watch mode.

```
npm install
export NODE_ENV=development     (for Windows, set NODE_ENV=development)
npm run build:webpack
```

Start sbt watch mode on another terminal.

```
sbt ~run

```

Open http://localhost:9000/sample/

Test JS code on another terminal.

```
npm run test
```

## Prod

```
npm install
export NODE_ENV=production     (for Windows, set NODE_ENV=production)
npm run test:prod
npm run build:webpack:prod
sbt start
```

# Browser Compatiability

IE9+ and modern browsers.

# Trouble shooting.

## Webpack watch mode does't work.

https://webpack.github.io/docs/troubleshooting.html#watching

# Future work

## Set dummy parameter on react component to avoid compile error.

http://www.mattgreer.org/articles/typescript-react-and-redux/

Are there better (reasonable) solutions?

## bundle image in jsx

import * as img from "../images/hoge.png" doesn't work.
typescript confused ...
