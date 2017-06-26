/*$(function() {
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
});*/


document.addEventListener('DOMContentLoaded', afterLoad, false);
function afterLoad(){
    var left = document.getElementsByClassName("arrows left");
    var right = document.getElementsByClassName("arrows right");

    left[0].addEventListener('click', function(){
        var curr = document.querySelectorAll(".slide.slide-curr");
        if(curr[0].previousElementSibling && curr[0].previousElementSibling.classList.contains("slide")){
            curr[0].classList.add("slide-right");
            curr[0].classList.remove("slide-curr");
            curr[0].previousElementSibling.classList.add("slide-curr");
            curr[0].previousElementSibling.classList.remove("slide-left");
        }
    });

    right[0].addEventListener('click', function(){
        var curr = document.querySelectorAll(".slide.slide-curr");
        if(curr[0].nextElementSibling && curr[0].nextElementSibling.classList.contains("slide")){
            curr[0].classList.add("slide-left");
            curr[0].classList.remove("slide-curr");
            curr[0].nextElementSibling.classList.add("slide-curr");
            curr[0].nextElementSibling.classList.remove("slide-right");
        }
    });

}