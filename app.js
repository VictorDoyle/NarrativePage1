/* SECTION: Chapter 1 */
// adding "Purple" soundtrack

/* NOTE: Hidden Elements pre-loaded */
$(".chapter1PartOne").hide();

/* added game soundtrack to work on click */
let chapter1Soundtrack = document.getElementById("purpleSong");
chapter1Soundtrack.loop = true;

function playAudio() {
    chapter1Soundtrack.play();
}

$(".beginChapter1").on("click", function fadeInChapter1(){
    playAudio();
    $(".chapter1Intro").fadeOut(1000);
    $(".chapter1PartOne").fadeIn(1000);
    $("#partOneColumn1").css({
        "width": "25%",
        "transition": "500ms width linear 1s"
    });
    $("#partOneColumn2").css({
        "width": "25%",
        "transition": "500ms width linear 3s"
    });
    $("#partOneColumn3").css({
        "width": "25%",
        "transition": "500ms width linear 5s"
    });
    $("#partOneColumn4").css({
        "width": "25%",
        "transition": "500ms width linear 8s"
    });
})

