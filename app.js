/* SECTION: Chapter 1 */
// adding "Purple" soundtrack

/* NOTE: Hidden Elements pre-loaded */
$(".chapter1PartOne").hide();
$(".chapter1PartTwo").hide();
$("#purpleQuestionOne").hide();
$("#purpleAnswerOne").hide();
$("#purpleQuestionTwo").hide();
$("#purpleAnswerTwo").hide();
$("#purpleImageOne").hide();
$("#purpleImageTwo").hide();
$("#purpleImageThree").hide();

/* added game soundtrack to work on click */
let chapter1Soundtrack = document.getElementById("purpleSong");
chapter1Soundtrack.loop = true;

function playAudio() {
    chapter1Soundtrack.play();
}

/* First question */
$(".beginChapter1").on("click", function fadeInPurple1(){
    playAudio();
    $(".chapter1Intro").fadeOut(1000);
    $(".chapter1PartOne").fadeIn(3000);
    $("#purpleQuestionOne").delay(1000).fadeIn(7000);
    $("#purpleAnswerOne").delay(7000).fadeIn(1000);
})

/* Second Question */
$("#purpleAnswerOne").on("click", function fadeInPurple2(){
    $(".chapter1PartOne").fadeOut(3000);
    $("#purpleIntro").fadeOut(3000);
    $(".chapter1PartTwo").fadeIn(3000);
    $("#purpleQuestionTwo").delay(1000).fadeIn(7000);
    $("#purpleAnswerTwo").delay(7000).fadeIn(1000);
})

/* Third Question -- narrative (show three images and then a question) */
$("#purpleAnswerTwo").on("click", function fadeInPurple3(){
    $(".chapter1PartTwo").fadeOut(3000);
    $("#purpleQuestionTwo").fadeOut(3000);
    $(".purpleAnswerTwo").fadeOut(3000);
    $("#purpleImageOne").delay(4000).fadeIn(3000);
    $("#purpleImageTwo").delay(8000).fadeIn(3000);
    $("#purpleImageThree").delay(12000).fadeIn(3000);
})


