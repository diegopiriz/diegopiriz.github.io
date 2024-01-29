
function saidYes() {
	var container = document.querySelector("#fireworks");
	var fireworks = new Fireworks.default(container);
	fireworks.start();

	$("#answer-no").addClass("disabled");
	$("#answer-yes").addClass("active");

	$("#happy").fadeIn(2000);
	$("#happy").siblings().addClass("d-none");
	$(".carousel-control-prev").addClass("d-none");
	setTimeout(redirectToQuotes, 30000);
}

function redirectToQuotes() {
	window.location.replace("./quotes.html");
}

$(document).ready(function() {
	$("#answer-yes").click(saidYes);
});
