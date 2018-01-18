
function removeTransition(e){
    if(e.propertyName !== "transform") return;
    e.target.classList.remove("oneShotPlaying");
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;
    if(audio.classList.contains("oneShot")) {
        audio.currentTime = 0;
        key.classList.add("oneShotPlaying");
        audio.play();
    } 
    else if(audio.classList.contains("loop")){
        var allAudios = document.querySelectorAll("audio");
        allAudios.forEach(function(audio){
            audio.pause();
        });

        audio.loop = true;
        centralCircle.classList.add("loopPlaying");
        key.classList.add("trackSelected");
        audio.play();
    }
}

function pauseBackingTrack(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;
    if(audio.classList.contains("loop")){
        var allAudios = document.querySelectorAll("audio");
        allAudios.forEach(function(audio){
            audio.pause();
        });
    centralCircle.classList.remove("loopPlaying");
    key.classList.remove("trackSelected");
    }
}


window.addEventListener("keydown", playSound);
window.addEventListener("keyup", pauseBackingTrack);

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(function(key){
    key.addEventListener("transitionend", removeTransition);
});

