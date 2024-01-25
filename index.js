
function checkitem() {
	var carousel = $("#carousel");
	var next = carousel.children(".carousel-control-next");
	var prev = carousel.children(".carousel-control-prev");
	if($(".carousel-inner .carousel-item:first").hasClass("active")) {
	    prev.hide();
	    next.show();
	} else if($(".carousel-inner .carousel-item:last").hasClass("active")) {
	    prev.show();
	    next.hide();
	} else {
		prev.show();
	    next.show();
	} 
}

var cookieName = "phrases";

function saidYes() {
	var container = document.querySelector("#fireworks");
	var fireworks = new Fireworks.default(container);
	fireworks.start();

	$("#answer-no").addClass("disabled");
	$("#answer-yes").addClass("active");

	$.cookie(cookieName, "yes", { expires: 365, path: "/" });

	$("#happy").fadeIn(2000);
	$("#happy").siblings().addClass("d-none");
	$(".carousel-control-prev").addClass("d-none");
	setTimeout(redirectToQuotes, 30000);
}

function redirectToQuotes() {
	window.location.replace("./quotes.html");
}

$(document).ready(function() {
	var cookie = $.cookie(cookieName);
	if(cookie !== undefined) {
		redirectToQuotes();
	}


	$("#carousel").on("slid.bs.carousel", "", checkitem);
	$("#answer-yes").click(saidYes);

    checkitem();
});
