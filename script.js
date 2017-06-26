$(function() {
    $(".arrows.left").click(function() {
        var curr = $(".slide.slide-curr");
        if (curr.prev("div.slide").length) {
            curr.addClass("slide-right").removeClass("slide-curr");
            curr.prev(".slide-left").addClass("slide-curr").removeClass("slide-left");
        }
    });

    $(".arrows.right").click(function() {
        var curr = $(".slide.slide-curr");
        if (curr.next("div.slide").length) {
            curr.addClass("slide-left").removeClass("slide-curr");
            curr.next(".slide-right").addClass("slide-curr").removeClass("slide-right");
        }
    });
});