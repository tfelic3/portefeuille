/*
function isEven(num){
	//return true if even
	if (num%2===0){
	return true;	
	} 
	else {
		return false
	}
	}



	setInterval
	*/

var s = document.getElementById("sports");

var m = document.getElementById("main");

var n =document.getElementById("news");

var i =document.getElementById("interactive");

var a =document.getElementById("all");


$("#nb").click(function() {
   $("#sports").show(),
    $("#news").show(),
    $("#interactive").show(),
    $("#interactive").hide( "slow" ),
    $("#sports").hide();})


   $( "#sb" ).click(function() {
    $("#sports").show( "fold"),
    $("#news").show(),
    $("#interactive").show(),
    $("#news").hide("slow"),
    $("#sports").show( "fold"),
    $("#news").hide();});


  $("#ib").click(function() {
$("#sports").show(),
 $("#news").show(),
 $("#interactive").show(),
$("#news").hide( "slow" ),
$("#sports").hide( "slow" ),
$("#news").hide();});





