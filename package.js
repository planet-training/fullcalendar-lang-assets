Package.describe({
  name: 'planettraining:fullcalendar-lang-assets',
  version: '2.3.2',
  // Brief, one-line summary of the package.
  summary: 'fullcalendar language files as assets',

  git: 'https://github.com/planet-training/fullcalendar-lang-assets.git',

  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var fs = Npm.require('fs');
  var path = Npm.require("path");

  var basePath = 'bower_components/fullcalendar/dist/lang'
  var files = fs.readdirSync(basePath)


  files.forEach(function(f){
    var fileName = path.basename(f)
    api.addFiles('bower_components/fullcalendar/dist/lang/'+fileName, 'client', {isAsset : true});
  });

  //in case you need to access the version
  api.addFiles('bower_components/fullcalendar/bower.json', 'server');
});
