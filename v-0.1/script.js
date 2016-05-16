/functions to activate the button upon click & focus on text input/ 
var number = document.getElementById('key');

$("#key1").focus(function() {
	number = document.getElementById('key1');
})

$("#key").focus(function() {
	number = document.getElementById('key');
}) 


function getNum(data) {
	if ( number.value.length < 4 ) {
		number.value = number.value + data;
	} else if ( number.value.length > 4 ) {
		number.value = number.value ;
	}
}

function backspace() {

	var fetch = number.value;

	number.value = fetch.substring(0, fetch.length - 1);
}

function reset() {
	number.value = "";
}

//to slide partial down and up

$("#mz-pc-partial").hide();
$("#mz-mp-partial").hide();
$("#mz-sq-partial").hide();
$("#mz-ae-partial").hide();

function hideView() {
	$(".mz-pc-view").slideUp("slow");
	$("#mz-mp-partial").slideUp("slow");
	$("#mz-pc-partial").slideUp("slow");
	$("#mz-sq-partial").slideUp("slow");
	$("#mz-ae-partial").slideUp("slow");
}

function mzClose(partial) {
	$(partial).slideUp("slow");
	$(".mz-pc-view").slideDown("slow");
}

function mzPcCtrl(data){
	if (data === 1) {
		hideView();
		$("#mz-pc-partial").slideDown("slow");
		
		
	} else if (data === 2) {
		hideView();
		$("#mz-mp-partial").slideDown("slow");
		
	} else if (data === 3) {
		hideView();
		$("#mz-sq-partial").slideDown("slow");
		
	} else if (data === 4) {
		hideView();
		$("#mz-ae-partial").slideDown("slow");
		
	} else {
		alert("Please try again Later! Server Busy")
	}
}

// Get date picker
function getDate() {
	$(".dateInput").datepicker();
}