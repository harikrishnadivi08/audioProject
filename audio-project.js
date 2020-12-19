var button1 = document.getElementById("button1");
var audio1 = document.getElementById("songHey");

button1.addEventListener ('click', function(){
    if (audio1.paused) {
        audio1.play();
        button1.innerHTML = '<i class="far fa-pause-circle fa-5x"></i>';
    } else {
        audio1.pause();
        button1.innerHTML = '<i class="far fa-play-circle fa-5x"></i>';
    }
})


var button2 = document.getElementById("button2");
var audio2 = document.getElementById("songBuddy");

button2.addEventListener ('click', function(){
    if (audio2.paused) {
        audio2.play();
        button2.innerHTML = '<i class="far fa-pause-circle fa-5x"></i>';
    } else {
        audio2.pause();
        button2.innerHTML = '<i class="far fa-play-circle fa-5x"></i>';
    }
})


var button3 = document.getElementById("button3");
var audio3 = document.getElementById("songCute");

button3.addEventListener ('click', function(){
    if (audio3.paused) {
        audio3.play();
        button3.innerHTML = '<i class="far fa-pause-circle fa-5x"></i>';
    } else {
        audio3.pause();
        button3.innerHTML = '<i class="far fa-play-circle fa-5x"></i>';
    }
})


var button4 = document.getElementById("button4");
var audio4 = document.getElementById("songMemories");

button4.addEventListener ('click', function(){
    if (audio4.paused) {
        audio4.play();
        button4.innerHTML = '<i class="far fa-pause-circle fa-5x"></i>';
    } else {
        audio4.pause();
        button4.innerHTML = '<i class="far fa-play-circle fa-5x"></i>';
    }
})



var button5 = document.getElementById("button5");
var audio5 = document.getElementById("songGoingHigher");

button5.addEventListener ('click', function(){
    if (audio5.paused) {
        audio5.play();
        button5.innerHTML = '<i class="far fa-pause-circle fa-5x"></i>';
    } else {
        audio5.pause();
        button5.innerHTML = '<i class="far fa-play-circle fa-5x"></i>';
    }
})



var button6 = document.getElementById("button6");
var audio6 = document.getElementById("songAcousticBreeze");

button6.addEventListener ('click', function(){
    if (audio6.paused) {
        audio6.play();
        button6.innerHTML = '<i class="far fa-pause-circle fa-5x"></i>';
    } else {
        audio6.pause();
        button6.innerHTML = '<i class="far fa-play-circle fa-5x"></i>';
    }
})