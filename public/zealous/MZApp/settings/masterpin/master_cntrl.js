(function (window, angular) {
    'use strict';
    var jq = jQuery;

    angular
        .module('MZApp.settings')
        .controller('MasterCtrl', ['$state','$rootScope','$location', 'Authentication',
            function($scope, $state, $rootScope, $location, Authentication){

            	var vm = this;



            	// vm.partialsActive = false;
            	// console.log($state.current.name);
            	// if($state.current.name == 'settings.password'){
            	// 	vm.partialsActive = true;
            	// }
            	jq(document).find('.mz-main').slideUp(500);
                // jq(document).click(function(){
                //     console.log("document is clicked");
                // });

                vm.goSettingHome = function(){
                    console.log('closing master partial');
                    jq(document).find('.mz-main').slideDown(500);
                    $state.go('settings');
                }

                var mzNum1 = jq('#mzNumKey11');
                var mzNum2 = jq('#mzNumKey21');
                var mzNum3 = jq('#mzNumKey31');

                jq("#mzNumKey32").click(function() {
                    mzNum3 = jq('#mzNumKey32');
                });

                jq("#mzNumKey31").click(function() {
                    mzNum3 = jq('#mzNumKey31');
                });

                jq("#mzNumKey12").click(function() {
                    mzNum1 = jq('#mzNumKey12');
                });

                jq("#mzNumKey11").click(function() {
                    mzNum1 = jq('#mzNumKey11');
                });

                jq("#mzNumKey21").click(function() {
                    mzNum1 = jq('#mzNumKey21');
                });

                vm.getNum1 = function(data) {
                    if ( $scope.mzNumKey11 < 4 ) {

                        mzNum1 = Number($scope.mzNumKey11) + data;
                        console.log("Good am less"+ mzNum1)

                    } else if ( mzNum1.val().length >= 4 ) {

                        mzNum1 = Number($scope.mzNumKey11) ;

                    }
                    console.log(mzNum1 + " "+ data)
                }

                vm.getNum2 = function(data) {
                    if ( mzNum2.val().length < 4 ) {

                        mzNum2.val() = mzNum2.val() + data;

                    } else if ( mzNum2.val().length >= 4 ) {

                        mzNum2.val() = mzNum2.val() ;

                    }
                }

                vm.getNum3 = function(data) {
                    if ( mzNum3.val().length < 4 ) {

                        mzNum3.val() = mzNum3.val() + data;

                    } else if ( mzNum3.val().length >= 4 ) {

                        mzNum3.val() = mzNum3.val() ;

                    } 
                }

                vm.displayBtn = function(){
                       
                    console.log("am In");
                }
    				// jq('.mz-main').slideUp(500);
    				// jq('.mz-set-pa').slideDown(500);
        //     	};

        //     	vm.mzClosePartials = function () {
        //     		console.log('closing partials');
        //     	}

        //     	jq('.mz-close').on('click', function(){
        //     		/*jq('.mz-set-pa').slideUp(500);
        //     		jq('.mz-main').slideDown(500);*/
        //     		console.log('closing partials')
            			
        //     	})
            }
        ]);

})(window, window.angular);