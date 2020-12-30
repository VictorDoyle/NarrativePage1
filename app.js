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
    /* first column */
    $("#partOneColumn1").css({
        "width": "25%",
        "transition": "500ms width linear 1s"
    });
    /* second column */
    setTimeout(function () {
        $("#partOneColumn2").css({
            "width": "25%",
            "transition": "500ms width linear .5s",
            "visibility": "visible",
        });
    }, 2500);
    /* third column */
    setTimeout(function () {
        $("#partOneColumn3").css({
            "width": "25%",
            "transition": "500ms width ease-in 1s",
            "visibility": "visible",
        });
    }, 5000);
    /* fourth column */
    setTimeout(function () {
        $("#partOneColumn4").css({
            "width": "25%",
            "transition": "500ms width linear .5s",
            "visibility": "visible",
        });
    }, 7000);

})

