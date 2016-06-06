/**
 * Created by Adekunle Adeyemi on 29/02/2016.
 */
(function (window, angular) {
    'use strict';

    angular
        .module('MZApp.settings')

        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                //$urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('settings', {
                        url : '/settings',
                        templateUrl : 'MZApp/settings/setting_index.html',
                        controller : 'SettingsCtrl as settings'

                    })
                    .state('settings.password', {
                        url : '/password',
                        templateUrl : 'MZApp/settings/password/password.html',
                        controller : 'PasswordCtrl as pwdSettings'

                    })
                    .state('settings.sq', {
                        url : '/sq',
                        templateUrl : 'MZApp/settings/sq/sq.html',
                        controller : 'SqCtrl as sqSettings'

                    })
                    .state('settings.entry', {
                        url : '/entry',
                        templateUrl : 'MZApp/settings/entry/entry.html',
                        controller : 'EntryCtrl as entrySettings'

                    })
                    .state('settings.master', {
                        url : '/master',
                        templateUrl : 'MZApp/settings/masterpin/master.html',
                        controller : 'MasterCtrl as masterSettings'

                    });
            }
        ]);
})(window, window.angular);