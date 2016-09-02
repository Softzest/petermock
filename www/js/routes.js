angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'templates/tabsController.html',
      abstract:true
    })

    .state('home.updates', {
      url: '/updates',
      views: {
        'tab1': {
          templateUrl: 'templates/updates.html',
          controller: 'cameraTabDefaultPageCtrl'
        }
      }
    })

  .state('home.talks', {
    url: '/talks',
    views: {
      'tab2': {
        templateUrl: 'templates/talks.html',
        controller: 'cartTabDefaultPageCtrl'
      }
    }
  })

  .state('home.tweets', {
    url: '/tweets',
    views: {
      'tab3': {
        templateUrl: 'templates/tweets.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('entry', {
    url: '/entry',
    templateUrl: 'templates/entry.html',
    controller : 'MEntryCtrl as mEntry'
  })
    .state('game', {
      url: '/game',
      templateUrl: 'templates/entry.html'
    })
    .state('fq', {
      url: '/fq',
      templateUrl: 'templates/entry.html'
    })
    .state('live', {
      url: '/live',
      templateUrl: 'templates/entry.html'
    })
    .state('testimony', {
      url: '/testimony',
      templateUrl: 'templates/entry.html'
    })
    .state('leaderBoard', {
      url: '/leaderBoard',
      templateUrl: 'templates/entry.html'
    })
    .state('demo', {
      url: '/demo',
      templateUrl: 'templates/entry.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })



$urlRouterProvider.otherwise('/home/updates')



});
