
function tajmer(){
	var proveradatum=new Date();
	var provera=proveradatum.getHours();
	var vreme=new Date().getTime();
	var krajnje=new Date("Dec 27, 2017 20:00:00").getTime();
	var vremeOdbrojavanja= krajnje-vreme;
	var razlika=new Date(vremeOdbrojavanja);
	var sati=razlika.getHours()-1;
	var minuti=razlika.getMinutes();
	if (minuti<10) minuti="0"+minuti;
	var sekunde=razlika.getSeconds();
	if (sekunde<10) sekunde="0"+sekunde;
	if ((provera>9) && (provera<20)) {
	document.getElementById("tajmer").innerHTML="Otvoreno je još - "+""+sati+":"+minuti+":"+sekunde;

}
else{
	document.getElementById("tajmer").innerHTML="Trenutno je zatvoreno."
}
}

setInterval(tajmer,1000);


$(document).ready(function(){
	$("#Fadee").click(function(){
    $("#Fadee").fadeOut();
    $("#Fadee").fadeOut("slow");
    $(" #Fadee").fadeOut(2000);
});



	$("#Skaliranje").mouseover(function(){
	$("#Skaliranje").stop();
	$("#Skaliranje").animate(
	{
		width:"60px",
		height:"60px",
		},2000);

	});

$("#Skaliranje").mouseleave(function(){
	$("#Skaliranje").stop();
	$("#Skaliranje").animate(
	{
		width:"100px",
		height:"100px",
		},2000);

	});
});

$(document).ready(function(){

	var brojac = 1;
	$("#omotacSlika img").hide();

function promena() {

brojac++;
if (brojac==6) brojac=1;

$("#img"+brojac).fadeIn(500).delay(2000).fadeOut(500);

}
 setInterval(promena,3250);
 promena();
});



$(document).ready(function(){
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

	});

$(document).ready(function(){
	var pocetnoStanje=$.cookie("username");
	if(pocetnoStanje===undefined)
	{   
		$("#meniLogin").show();
		$("#meniLogout").hide();
	}
	else
	{
		$("#meniLogin").hide();
		$("#meniLogout").show();
		$("#meniLogout").text("Logout"+pocetnoStanje);
	}

	$("#meniLogout").click(function(){
		$("#meniLogin").show();
		$("#meniLogout").hide();
		$.removeCookie("username");

	});


	$("#modalLogin").click(function(){
		var password=$("#password").val();
		var username=$("#username").val();
		if((password==="admin")&&(username==="admin"))
		{

			$("#meniLogin").hide();
			$("#meniLogout").show();
			$("#meniLogout").text("Logout"+username);
			$.cookie("username",username);
		}
		else{
			window.alert("Losa kombinacija username i password");
		}

	});

});