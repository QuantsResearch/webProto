TODO modify this file.

# About

Sample app developed with below tools set.

* Client
  * Language
    * typescript 2.0
  * Framework & Library
    * react
    * redux
    * redux-saga
    * axios
    * inversify 2.0 
  * Build tool
    * webpack
  * Test
    * karma
    * jasmine
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
* nodejs (v4.6.2)

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


