module.exports = function (config) {
    config.set({
        basePath: '../app',

        // generate js files from html templates
        preprocessors: {
            '**/*.html': ['ng-html2js']
        },

        files: [
             'lib/vendor/jquery-1.9.1.js',
            'lib/angular/angular.js',
            'lib/angular/angular-*.js',
            '../test/lib/angular/angular-mocks.js',
            'js/**/*.js',
            'templates/**/*.html',
            '../test/unit/**/*.js'
        ],

        exclude: [
            'lib/angular/angular-loader.js',
            'lib/angular/*.min.js',
            'lib/angular/angular-scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    })
}
