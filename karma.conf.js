// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        concurrency: 1,
        client: {
            jasmine: {
                random: false,
            },
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        files: [

        ],
        preprocessors: {

        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, 'coverage'), reports: ['html', 'text-summary', 'json-summary', 'cobertura'],
            fixWebpackSourcePaths: true,
            'report-config': {
                'text-summary': {
                    file: 'tmdb-angular.txt'
                }
            }
        },

        reporters: config.angularCli && config.angularCli.codeCoverage
            ? ['progress', 'coverage-istanbul']
            : ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        // browsers: ['ChromeHeadless'],
        singleRun: false,
        browserNoActivityTimeout: 200000
    });
};
