Fullcalendar's language files added as assets to they can be loaded by the browser

Further details see http://fullcalendar.io/

# Usage
The files are exposed by the server like in this path
```/packages/planettraining_ng-fullcalendar-lang-assets/bower_components/fullcalendar/dist/lang/THE_LANGUGAE_CODE.js
i.e.:
/packages/planettraining_ng-fullcalendar-lang-assets/bower_components/fullcalendar/dist/lang/de.js
```
This package was to designed to use with angular


So to use it with for example [ocLazyLoad](https://github.com/ocombe/ocLazyLoad)

```
myApp.controller("MyCtrl", function($ocLazyLoad, ngMeteorCacheKeys) {
  var lang = 'de';
  var langAssetPath = '/packages/planettraining_ng-fullcalendar-lang-assets/bower_components/fullcalendar/dist/lang/' + lang + '.js'
  //this packages leaves an entry in the ng-cache-buster, append the entry
  langAssetPath = langAssetPath + '?version='ngMeteorCacheKeys[langAssetPath];
  
  $ocLazyLoad.load(langAssetPath).then(function(){
        $('#calendar').fullCalendar({
          lang : lang
        });
  })
});
```


Futher cache bustering details https://github.com/planet-training/meteor-ng-cache-buster
