
var app = angular.module("myApp",['pascalprecht.translate','tmh.dynamicLocale']);

app.config(["$translateProvider","tmhDynamicLocaleProvider", function($translateProvider, tmhDynamicLocaleProvider){
  
 $translateProvider.useStaticFilesLoader({
    prefix: 'assets/',
    suffix: '.json'
    });

 tmhDynamicLocaleProvider.localeLocationPattern('/node_modules/angular-i18n/angular-locale_{{locale}}.js');

  $translateProvider.preferredLanguage('en-custom');
  $translateProvider.fallbackLanguage(['en']);
  //$translateProvider.fallbackLanguage(['en', 'fr']);
  
}]);

app.controller("translateController" ,["$scope","$translate","tmhDynamicLocale",function($scope,$translate,tmhDynamicLocale){
  $scope.dateValue = new Date();
  $scope.population = 1234567890;
  $scope.salary = 9876543210;

  tmhDynamicLocale.set('en');
  $scope.changeLanguage = function(lang){
   $translate.use(lang); 
   if(lang !== 'en-custom') {
    tmhDynamicLocale.set(lang);
   }
  }
}]);