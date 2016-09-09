angular.module('app.controllers', [])

.controller('cameraTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cartTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('MEntryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  var vm = $scope;
  vm.gameTypes = ['General', 'Sport'];

}])

.controller('withdrawCtrl', ['$scope', '$state',
// this controller is to control the activities in deposit page
  function ($scope, $state) {

    $scope.validateSubmit = function() {
      $state.go('confirm');
    }
  }
])

.controller('depositCtrl', ['$scope', '$state',
// this controller is to control the activities in deposit page
  function ($scope, $state) {
    // $scope.payment = 'paypal';
    $scope.paypalAccount = true;
    $scope.creditCardAccount = true;
    
    $scope.paymentSubmit = function() {
      if ($scope.payment == 'paypal') {
        $scope.paypalAccount = false;
        $scope.depositType = true;
      }else if ($scope.payment == 'creditCard') {
        $scope.creditCardAccount = false;
        $scope.depositType = true;
      }
    }

    $scope.addNewAccount = function(account) {
      $state.go('accountForm', {accountType: account});
    }

    $scope.validateSubmit = function() {
      $state.go('confirm');
    }
  }
])

.controller('historyCtrl', ['$scope', 
  function($scope) {
    $scope.earnedHistory = true;
    $scope.withdrawHistory = true;
    
    $scope.viewDeposit = function() {
      $scope.depositHistory = false;
      $scope.earnedHistory = true;
      $scope.withdrawHistory = true;

    }
    
    $scope.viewEarned = function() {
      $scope.depositHistory = true;
      $scope.earnedHistory = false;
      $scope.withdrawHistory = true;

    }

    $scope.viewWithdraw = function() {
      $scope.depositHistory = true;
      $scope.earnedHistory = true;
      $scope.withdrawHistory = false;

    }
  }
])

.controller('addAccountCtrl',['$scope', '$state', '$stateParams', 

  function($scope, $state, $stateParams) {
    var account = $stateParams.accountType;
      if (account == 'paypal') {
        $scope.addPaypalForm = false;
        $scope.addCreditCardForm = true;
      }else if (account == 'creditCard') {
        $scope.addCreditCardForm = false;
        $scope.addPaypalForm = true;
      }
  }

])

.controller('accountCtrl',['$scope', '$ionicHistory', 

  function($scope, $ionicHistory) {
    $scope.goBack = function() {
      $ionicHistory.viewHistory().backView;
      console.log('hi');
    }
  }

])