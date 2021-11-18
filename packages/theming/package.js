Package.describe({
  name: 'theming',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: null,
});

Package.registerBuildPlugin({
  name: 'theming-minifier',
  use: ['ecmascript'],
  sources: ['theming.js']
});

Package.onUse(function(api) {
  api.versionsFrom('2.5');
  api.use('isobuild:minifier-plugin@1.0.0');
});
