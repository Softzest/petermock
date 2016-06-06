/**
 * Created by Adekunle Adeyemi on 29/02/2016.
 * Contributor: Peter Olayinka on 06/04/2016.
 * Last Editted by Peter Olayinka.
 */

(function (window, angular) {
    'use strict';
    var jq = jQuery;

    angular
        .module('MZApp.account')
        .controller('AccountCtrl', ['$state', '$rootScope', '$location', 'Authentication',
            function($state, $rootScope, $location, Authentication){
                var vm = this;

                //this array is used to store all data in the form after validation of inputs for processing
                var formValue = [];

                //this is to initialise invisibility for some view by default
                jq('#mz-dp-pp').hide();
                jq('#mz-dp-cc').hide();
                jq('#mz-wt-mn').hide();
                jq('#mz-vl-mn').hide();
                jq('#mz-vl-mn2').hide();
                jq('#mzCcFm').hide();
                jq('#mzDpNewMailCon').hide();
                jq('#mzDpNewMailCon').hide();

                vm.selectAcc = function(){
                    //to display credit card or paypal portal
                    var formData = jq('input[name=means]:checked').val();

                    formValue['means'] = formData;
                    if( formData == "paypal"){
                        jq('#mz-dp-pp').show();
                    }else if( formData == "credit-card" ){
                        jq('#mz-dp-cc').show();
                    }
                        jq('#mz-dp-mn').hide();
                };

                vm.valDeposit = function(){
                    // to navigate to master card pin after completing card or paypal details
                    if (formValue['means'] == "paypal") {
                        jq('#mz-dp-pp').hide();
                        jq('#mz-vl-mn').show();
                    }else if (formValue['means'] == "credit-card") {
                        jq('#mz-dp-cc').hide();  
                        jq('#mz-vl-mn').show();                     
                    }

                    var withdrawMeans = jq("input[name=pay-means]:checked");
                    if (withdrawMeans) {
                        jq('#mzWtMn').hide();
                        jq('#mz-vl-mn2').show();
                    }
                    
                }

                vm.processPayment = function(){
                    //all neccessary payment script goes here using values stored in array formValue
                }

                vm.backSelect = function(show,hide){
                    //to returns users back to their previous activity
                    if(show == "back"){
                        if (formValue['means'] == "paypal") {
                            show = '#mz-dp-pp';
                        }else if (formValue['means'] == "credit-card") {
                            show = '#mz-dp-cc';                     
                        }
                        hide = '#mz-vl-mn';
                    }
                    jq(hide).hide();
                    jq(show).show();
                }

                vm.mzAbleInp = function(){
                    // to display&&enable form inputs
                    var form1 = jq('input[name=user-email]:checked').val();
                    var form2 = jq('input[name=user-card]:checked').val();

                    var formCon1 = jq('#mz-dp-pp');
                    var formCon2 = jq('#mzCcFm');

                    if (form1 == "addNewMail") {
                        formCon1.find('input[name=new-email]').attr('disabled', false);
                        jq('#mzDpNewMailCon').slideDown(1000);
                    }else{
                        formCon1.find('input[name=new-email]').attr('disabled', true);
                        jq('#mzDpNewMailCon').slideUp(1000);
                    }

                    if (form2 == "addNewCard" ) {
                        formCon2.find('input').attr('disabled', false);
                        jq('#mzCcFm').slideDown(1000);
                    }else{
                        formCon2.find('input').attr('disabled', true);
                        jq('#mzCcFm').slideUp(1000);
                    }
                    console.log(form1);
                    console.log(form2);
                }

                
            }
        ]);
})(window, window.angular);