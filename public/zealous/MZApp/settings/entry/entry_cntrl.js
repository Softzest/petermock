(function (window, angular) {
    'use strict';
    var jq = jQuery;

    angular
        .module('MZApp.settings')
        .controller('EntryCtrl', ['$state','$rootScope','$location', 'Authentication',
            function($state, $rootScope, $location, Authentication){

            	var vm = this;

            	// vm.partialsActive = false;
            	// console.log($state.current.name);
            	// if($state.current.name == 'settings.password'){
            	// 	vm.partialsActive = true;
            	// }
            	jq(document).find('.mz-main').slideUp(500);

                vm.goSettingHome = function(){
                    jq(document).find('.mz-main').slideDown(500);
                    $state.go('settings');
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