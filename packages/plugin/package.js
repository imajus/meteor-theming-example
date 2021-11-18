Package.describe({
  name: 'plugin',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: null,
});

Package.registerBuildPlugin({
  name: 'plugin-minifier',
  use: [
    'ecmascript',
    'minifier-css',
    'theming'
  ],
  sources: ['minifier.js']
});

Package.onUse(function(api) {
  api.versionsFrom('2.5');
  api.use('isobuild:minifier-plugin@1.0.0');
});
