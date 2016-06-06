/**
 * Created by Adekunle Adeyemi on 30/04/2016.
 */
(function (window, angular) {
    'use strict';

    angular
        .module('MZApp.account')

        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                //$urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('account', {
                        url : '/account',
                        abstract : 'true',
                        templateUrl : 'MZApp/account/account_index.html',
                        controller : 'AccountCtrl as account'
                    })
                    .state('account.history', {
                        url : '/history',
                        // redirectTo : 'account/history/deposit',
                        templateUrl : 'MZApp/account/history/history_index.html',
                        controller : 'AccountCtrl as accHistory'
                    })
                
                    .state('account.deposit', {
                        url : '/deposit',
                        templateUrl : 'MZApp/account/deposit/deposit.html',
                        controller : 'AccountCtrl as accDeposit'
                    })
                    .state('account.withdraw', {
                        url : '/withdraw',
                        templateUrl : 'MZApp/account/withdraw/withdraw.html',
                        controller : 'AccountCtrl as accWithdraw'
                    })
                    .state('account.cards', {
                        url : '/cards',
                        // templateUrl : 'MZApp/account/cards/cards.html',
                        // controller : 'DashCtrl as dash'
                    })
                    .state('account.paypal', {
                        url : '/paypal',
                        // templateUrl : 'MZApp/account/paypal/paypal.html',
                        // controller : 'DashCtrl as dash'
                    })
                    .state('account.bank', {
                        url : '/bank',
                        // templateUrl : 'MZApp/account/bank/bank.html',
                        // controller : 'DashCtrl as dash'
                    })
                ;
            }
        ]);
})(window, window.angular);