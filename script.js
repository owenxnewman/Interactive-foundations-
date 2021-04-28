
console.log('test');


$(document).ready(function(){

	//------------------------------------
	// adds a a darkmode class to the body
	//------------------------------------
	$("#mode").click(function(){
		console.log('clicked');
		$('body').toggleClass('darkmode');
	});

});