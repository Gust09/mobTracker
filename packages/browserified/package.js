Package.describe({
  summary: 'Browserified NPM´s',
  version: '0.1.0',
});

Npm.depends({
  'mobservable': '1.2.1',
});

Package.onUse(function (api) {
  api.use([
    'ecmascript',
    'cosmos:browserify@0.9.3'
  ]);
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('server.js', 'server');
  api.export('mobservable');
});
