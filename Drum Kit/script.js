window.addEventListener('keydown', function(e){
//  console.log(e) 

const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
key.classList.add("playing")
// console.log(audio)
if(!audio) return;
audio.currentTime = 0;
audio.play();
})

const play = document.querySelectorAll(".key")

play.forEach(function (key) {
    key.addEventListener('transitionend',function (e) {
        console.log(e)
        if(e.propertyName !== "transform") return;
        console.log(this)
        this.classList.remove('playing') 
    })
})