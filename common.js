function checkitem() {
    var carousel = $("#carousel");
    var next = carousel.children(".carousel-control-next");
    var prev = carousel.children(".carousel-control-prev");
    if ($(".carousel-inner .carousel-item:first").hasClass("active")) {
        prev.hide();
        next.show();
    } else if ($(".carousel-inner .carousel-item:last").hasClass("active")) {
        prev.show();
        next.hide();
    } else {
        prev.show();
        next.show();
    }
}

$(document).ready(function () {
    $("#carousel").on("slid.bs.carousel", "", checkitem);
    checkitem();
});
