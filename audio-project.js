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