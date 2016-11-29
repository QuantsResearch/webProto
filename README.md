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
sbt stage
target/universal/stage/bin/webboilerplate -Dconfig.resource=dev.conf -Dlogger.resource=log/dev.xml
```

# Browser Compatiability

IE11(*) and modern browsers.

*If your target browsers are IE9+, for workaround, avoid using '@inject' feature of inversifyjs.
Though @inject needs "import reflect-metadata", IE9 and 10 will be crashed if you import it.
You can use 'kernel.get' method instead.  

# Description

## Client Side

* Compile typescript to ES6, and transpile ES6 to ES5 with babel. Use babel-polyfill.
