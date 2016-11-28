const webpackConfig = require('./webpack.config.dev.js');
module.exports = function(config) {
    config.set({
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            {pattern: 'typescript/test/!(*testHelper)**/*.ts'}
        ],
        preprocessors: {
            'typescript/test/**/*.ts': ['webpack']
        },

        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        },

        colors: true,
        autoWatch : true,
        frameworks: ['jasmine'],
        browsers : ['PhantomJS'],
        reporters: ['progress', 'junit'],
        // the default configuration
        junitReporter: {
            outputDir: 'target/test-js-reports', // results will be saved as $outputDir/$browserName.xml
            outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {} // key value pair of properties to add to the <properties> section of the report
        }
    });
};