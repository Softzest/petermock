/functions to activate the button upon click & focus on text input/ 
var mzNum1 = document.getElementById('mzNumKey11');
var mzNum2 = document.getElementById('mzNumKey21');
var mzNum3 = document.getElementById('mzNumKey31');
var mzNumPay = document.getElementById('mzNumPay');

$(".mzShowPad1").hide();
$(".mzShowPad2").hide();
$(".mzShowPad3").hide();
$(".mz-vl-btn").hide();

// function to toggle between the two number input based on their focus
$("#mzNumKey12").click(function() {
	mzNum1 = document.getElementById('mzNumKey12');
	$(".mzShowPad1").toggle();
});

$("#mzNumKey11").click(function() {
	mzNum1 = document.getElementById('mzNumKey11');
	$(".mzShowPad1").toggle();
});

$("#mzNumKey21").click(function() {
	mzNum1 = document.getElementById('mzNumKey21');
	$(".mzShowPad2").toggle();
});

// function to toggle between the two number input based on their focus

$("#mzNumKey32").click(function() {
	mzNum3 = document.getElementById('mzNumKey32');
	$(".mzShowPad3").toggle();
});

$("#mzNumKey31").click(function() {
	mzNum3 = document.getElementById('mzNumKey31');
	$(".mzShowPad3").toggle();
});

$("#mzNumPay").click(function() {
	$(".mz-vl-btn").toggle();
});

function getNum1(data) {
	if ( mzNum1.value.length < 4 ) {

		mzNum1.value = mzNum1.value + data;

	} else if ( mzNum1.value.length >= 4 ) {

		mzNum1.value = mzNum1.value ;

	}
}

function getNum2(data) {
	if ( mzNum2.value.length < 4 ) {

		mzNum2.value = mzNum2.value + data;

	} else if ( mzNum2.value.length >= 4 ) {

		mzNum2.value = mzNum2.value ;

	}
}

function getNum3(data) {
	if ( mzNum3.value.length < 4 ) {

		mzNum3.value = mzNum3.value + data;

	} else if ( mzNum3.value.length >= 4 ) {

		mzNum3.value = mzNum3.value ;

	} 
}

function getPay(data) {
	if ( mzNumPay.value.length < 4 ) {

		mzNumPay.value = mzNumPay.value + data;

	} else if ( mzNumPay.value.length >= 4 ) {

		mzNumPay.value = mzNumPay.value ;

	} 
}

function backspace(num) {

	if (num === 1) {

		var fetch = mzNum1.value;
		mzNum1.value = fetch.substring(0, fetch.length - 1);

	} else if (num === 2) {

		var fetch = mzNum2.value;
		mzNum2.value = fetch.substring(0, fetch.length - 1);

	} else if (num === 3) {

		var fetch = mzNum3.value;
		mzNum3.value = fetch.substring(0, fetch.length - 1);

	} else if (num === 4) {

		var fetch = mzNumPay.value;
		mzNumPay.value = fetch.substring(0, fetch.length - 1);

	} else {

		alert("Number pad can not function properly, please reload your browser");

	}
	
}

function reset(num) {

	if (num === 1) {

		mzNum1.value = "";

	} else if (num === 2) {

		mzNum2.value = "";

	} else if (num === 3) {

		mzNum3.value = "";

	} else if (num === 4) {

		mzNumPay.value = "";

	} else {
		alert("Number pad can not function properly, please reload your browser");
	}

	
}

//to slide partial down and up

$("#mz-pc-sec").hide(); 
$("#mz-mp-sec").hide();
$("#mz-sq-sec").hide();
$("#mz-ae-sec").hide();

function hideView() {
	$(".mz-partial").slideUp("slow");
	$("#mz-mp-sec").slideUp("slow");
	$("#mz-pc-sec").slideUp("slow");
	$("#mz-sq-sec").slideUp("slow");
	$("#mz-ae-sec").slideUp("slow");
}

function mzClose(partial) {
	$(partial).slideUp("slow");
	$(".mz-partial").slideDown("slow");
}

function mzPcCtrl(data){
	if (data === 1) {
		hideView();
		$("#mz-pc-sec").slideDown("slow");
		
		
	} else if (data === 2) {
		hideView();
		$("#mz-mp-sec").slideDown("slow");
		
	} else if (data === 3) {
		hideView();
		$("#mz-sq-sec").slideDown("slow");
		
	} else if (data === 4) {
		hideView();
		$("#mz-ae-sec").slideDown("slow");
		
	} else {
		alert("Please try again Later! Server Busy")
	}
}


	$('.mz-pickDate').click(function() {
		$(".mz-pickDate").datepicker();	
	})
	

// to toogle disabled input field

function mzAbleInp(inputId) {
	if (inputId === "#mz-dp-email") {
		var mzInp = "#mz-dp-NewMail";
	}else if (inputId === "#mz-dp-card") {
		var mzInp = ".mz-dp-cd";
	}
	

	if ($(inputId).is(':checked')) {
		$(mzInp).prop('disabled', false);
	}else  {
		$(mzInp).prop('disabled', true);
	}
	
}

//to change total value to input value

function changeVal(input, total) {
	var inputField = document.getElementById(input);
	var totalField = document.getElementById(total);
	if (inputField.value.length <= 10) {
		totalField.innerHTML = inputField.value;
	} else {
		inputField.value = totalField.innerHTML;
	}
}

//amount less than 200
function changeVal200(input, total) {
	var inputField = document.getElementById(input);
	var totalField = document.getElementById(total);
	if (inputField.value.length <= 3) {
		totalField.innerHTML = inputField.value;
	} else {
		inputField.value = totalField.innerHTML;
	}
	// totalField.innerHTML = inputField.value;
}