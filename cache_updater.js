var bower = JSON.parse(Assets.getText('bower_components/fullcalendar/bower.json'));

['de', 'it', 'es', 'sk'].forEach(function(l){
    NgCacheBusterManager.setEntry('/packages/planettraining_fullcalendar-lang-assets/bower_components/fullcalendar/dist/lang/'+l+'.js',bower.version);
});

