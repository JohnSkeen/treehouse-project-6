$('video').mediaelementplayer({
       features: ['playpause','current', 'progress', 'duration','volume', 'fullscreen'],
       strectching: 'auto'
     });

let myVideo = document.getElementById('myVideo');
let text = document.querySelectorAll('.text-color');
let textSelect = document.getElementById('textSelect');

myVideo.addEventListener("timeupdate", () => {
 for (let i = 0; i < text.length; i++){
   if(myVideo.currentTime > text[i].getAttribute('data-start') && myVideo.currentTime <= text[i].getAttribute('data-end')){
     text[i].classList.add("highlighted-text");
   } else {
     text[i].classList.remove("highlighted-text");
   }
 }
});

textSelect.addEventListener('click',(e) => {
 if (e.target.tagName == ('SPAN')){
   myVideo.currentTime = +e.target.getAttribute('data-start');
   myVideo.play();
 }
});
