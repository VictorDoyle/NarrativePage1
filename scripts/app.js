/* SECTION: Seizure warning on homepage */

$(".acceptWarning").on("click", function ShowHome(){
    $(".seizureWarning").hide();
    /* TODO: Add button timer of 15min so the Warning is not always shown everytime user returns to homepage
    OR, store in cookie session */
})


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
$("#purpleImageFour").hide();
$("#purpleImageFive").hide();
$("#purpleImageSix").hide();
$("#purpleImgChange").hide();
$(".chapter1PartFour").hide();
$("#purpleMidQOne").hide();
$("#purpleMidAOne").hide();
$("#purpleMidQTwo").hide();
$("#purpleMidATwo").hide();
$("#purpleMidAThree").hide();
$("#purpleMidAFour").hide();
$("#purpleMidAFive").hide();
$("#purpleMidASix").hide();
$("#purpleNewBackgroundTwo").hide();
$(".chapter1PartFive").hide();
$("#skeletonFront").hide();
$("#musclesFront").hide();
$("#skeletonBack").hide();
$("#musclesBack").hide();
$("#alienFront").hide();
$("#alienBack").hide();
$("#bodyExplanation1").hide();
$("#bodyExplanation2").hide();
$("#bodyExplanation3").hide();
$("#bodyExplanation4").hide();
$("#bodyExplanation5").hide();
$("#bodyExplanation6").hide();
$("#purpleEnding1").hide();
$("#purpleEnding2").hide();


/* music play on click for chapter 1 */
let purpleSoundtrack = document.getElementById("purpleSong")
purpleSoundtrack.loop = true;
function playAudio() {
    purpleSoundtrack.play();
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
    $("#purpleImageTwo").delay(6000).fadeIn(3000);
    $("#purpleImageThree").delay(8000).fadeIn(3000);
    $("#purpleImageOne").delay(4000).fadeOut(3000);
    $("#purpleImageTwo").delay(6000).fadeOut(3000);
    $("#purpleImageThree").delay(8000).fadeOut(3000);
    $("#purpleImageFour").delay(20000).fadeIn(3000);
    $("#purpleImageFive").delay(24000).fadeIn(3000);
    $("#purpleImageSix").delay(26000).fadeIn(3000);
    $("#purpleImageFour").delay(4000).fadeOut(3000);
    $("#purpleImageFive").delay(6000).fadeOut(3000);
    $("#purpleImageSix").delay(8000).fadeOut(3000);
    $(".chapter1PartFour").delay(40000).fadeIn(3000);
    $("#purpleImgChange").delay(1000).fadeIn(3000);
})

$("#purpleImgChange").on("click", function fadeInPurple4() {
    $(".chapter1PartThree").hide();
    $(".chapter1Part4One").fadeOut(3000);
    $("#purpleMidQOne").delay(1000).fadeIn(7000);
    $("#purpleMidAOne").delay(5000).fadeIn(1000);
})

$("#purpleMidAOne").on("click", function fadeInPurple5 () {
    $(".chapter1Part4Two").fadeOut(3000);
    $("#purpleMidQTwo").delay(1000).fadeIn(7000);
    $("#purpleMidATwo").delay(5000).fadeIn(1000);
})

$("#purpleMidATwo").on("click", function fadeInPurple6(){
    $(".chapter1Part4Three").fadeOut(3000);
    $("#purpleNewBackground").delay(1000).fadeIn(3000);
    $(".chapter1Part4Four").delay(1000).fadeIn(7000);
    $("#purpleMidAThree").delay(7000).fadeIn(5000);
})

$("#purpleMidAThree").on("click", function fadeInPurple7(){
    $(".chapter1Part4Four").fadeOut(3000);
    $(".chapter1Part4Five").delay(1000).fadeIn(7000);
    $("#purpleMidAFour").delay(7000).fadeIn(5000);
})

$("#purpleMidAFour").on("click", function fadeInPurple8(){
    $(".chapter1Part4Five").fadeOut(3000);
    $("#purpleNewBackground").fadeOut(3000);
    $("#purpleNewBackgroundTwo").delay(1000).fadeIn(3000);
    $(".chapter1Part4Six").delay(1000).fadeIn(7000);
    $("#purpleMidAFive").delay(7000).fadeIn(5000);
})

$("#purpleMidAFive").on("click", function fadeInPurple9() {
    $(".chapter1Part4Six").fadeOut(3000);
    $(".chapter1Part4Seven").delay(1000).fadeIn(7000);
    $("#purpleMidASix").delay(7000).fadeIn(5000);
})

$("#purpleMidASix").on("click", function fadeInPurple10() {
    $(".chapter1Part4Seven").fadeOut(3000);
    $(".chapter1PartFive").delay(1000).fadeIn(7000);
    $("#skeletonFront").delay(3000).fadeIn(3000);
    $("#musclesFront").delay(7000).fadeIn(3000);
    $("#skeletonBack").delay(10000).fadeIn(3000);
    $("#musclesBack").delay(13000).fadeIn(3000);
    $("#bodyExplanation1").fadeIn(3000);
    $("#bodyExplanation1").delay(5000).fadeOut(3000);
    $("#bodyExplanation2").delay(7000).fadeIn(3000);
    $("#bodyExplanation2").delay(5000).fadeOut(3000);
    $("#bodyExplanation3").delay(12000).fadeIn(3000);
    $("#bodyExplanation3").delay(5000).fadeOut(3000);
    $("#bodyExplanation4").delay(17000).fadeIn(3000);
    $("#bodyExplanation4").delay(5000).fadeOut(3000);
    $("#alienFront").delay(18000).fadeIn(4000);
    $("#alienBack").delay(15000).fadeIn(4000);
    $("#bodyExplanation5").delay(24000).fadeIn(3000);
    $("#bodyExplanation5").delay(6000).fadeOut(3000);
    $("#bodyExplanation6").delay(30000).fadeIn(3000);
    $("#bodyExplanation6").delay(5000).fadeOut(5000);
    $("#purpleEnding1").delay(38000).fadeIn(3000);
    $("#purpleEnding1").delay(5000).fadeOut(5000);
    $("#purpleEnding2").delay(44000).fadeIn(3000);
})

