basePath = '../app';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'lib/angular/angular.js',
  'lib/angular/angular-*.js',
  '../test/lib/angular/angular-mocks.js',
  'js/**/*.js',
  'templates/**/*.html',
  '../test/unit/**/*.js'
];

// generate js files from html templates
preprocessors = {
    '**/*.html': 'html2js'
};

autoWatch = false;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
