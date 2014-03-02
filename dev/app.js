require([
    'jquery',
    'angular',
    'utils',
    'uiRouter',
    'loadControllers',
    'loadFilters',
    'loadServices'    
], function ($, angular) {
    'use strict';
    console.log("loading App...");
    $(document).ready(function() {
        var ngApp = angular.module('ngApp', [
            'angular.ui.utils',
            'mm.foundation.utils',
            'ngApp.controllers',
            'ngApp.filters',
            'ngApp.services',
            'ui.router'
        ]);

        ngApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]);

        ngApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $routerProvider){
          $routerProvider.otherwise('/');

          $stateProvider
            .state('posts', {
              url: '/',
              views: {
                '': {
                    templateUrl: 'partials/posts.html',
                    controller: 'PostsController'
                }
              }
              
            })
            .state('posts.detail', {
              url: '/:postId',
              views: {
                '': { 
                    templateUrl: 'partials/postsDetail.html',
                    controller: 'PostsDetailController'
                }
              }
            })
            .state('music', {
              url: '/music',
              views: {
                'player': {
                    templateUrl: 'partials/music/musicPlayer.html',
                    controller: 'MusicPlayerController'
                },
                'main': {
                    templateUrl: 'partials/music/musicSearch.html',
                    controller: 'MusicSearchController'
                },
                'sidebar': {
                    templateUrl: 'partials/music/musicPlaylist.html',
                    controller: 'MusicPlaylistController'
                }
              }
              
            });
        }]);

        angular.bootstrap(document, ['ngApp']);

        console.log("App loaded");
    });
    
    
});