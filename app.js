/* SECTION: Chapter 1 */
// adding "Purple" soundtrack

/* NOTE: Hidden Elements pre-loaded */
$(".chapter1PartOne").hide();
$(".dialogueBoxStripe").hide()
$(".introductionImageChap1").hide()

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
    $(".introductionImageChap1").fadeIn(8000);
    $(".dialogueBoxStripe").fadeIn(5000);
    $(".dialogueBoxStripe").fadeIn(5000);
})

