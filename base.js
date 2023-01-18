
function removeBanner() {
	$('body script').last().remove();
	$('body div').last().remove();
}

$(document).ready(function() {
    removeBanner();
});