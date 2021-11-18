Package.describe({
  name: 'theme-alpha',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: null,
});

Package.registerBuildPlugin({
  name: 'theme-one-minifier',
  use: ['ecmascript', 'theming'],
  sources: ['theme-alpha.js']
});

Package.onUse(function(api) {
  api.versionsFrom('2.5');
  api.use('isobuild:minifier-plugin@1.0.0');
});
