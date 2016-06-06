(function (window, angular) {
    'use strict';
    var jq = jQuery;

    angular
        .module('MZApp.settings')
        .controller('SettingsCtrl', ['$state','$rootScope','$location', 'Authentication',
            function($state, $rootScope, $location, Authentication){

            	var vm = this;

            	vm.partialsActive = false;
            	console.log($state.current.name);
            	if($state.current.name == 'settings.password'){
            		vm.partialsActive = true;
            	}

            	var mainSettingView = jq(document).find('.mz-main');
            	console.log(mainSettingView.css('display'));
            	if(mainSettingView.css('display') == 'none'){
            		console.log('main is hidden');
            		mainSettingView.show();
            	}
        //     	vm.showPartials = function(){
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