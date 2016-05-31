/**
 * Created by Adekunle adeyemi on 13/02/2016.
 */
(function (window, angular) {
    'use strict';

    angular
        .module('MZApp.payment')

        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                //$urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('payment', {
                        url : '/payment',
                        templateUrl : 'MZApp/payment/pay_index.html',
                        // controller : 'PayCtrl as pay'
                    });
            }
        ]);
})(window, window.angular);