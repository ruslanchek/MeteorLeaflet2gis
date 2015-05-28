Package.describe({
  name: 'rshashkov:2gis',
  version: '0.0.11',
  // Brief, one-line summary of the package.
  summary: '2gis layer for Leaflet',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ruslanchek/MeteorLeaflet2gis',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('2gis.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rshashkov:2gis');
  api.addFiles('2gis-tests.js');
});
