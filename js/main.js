$('video').mediaelementplayer({
       features: ['playpause','current', 'progress', 'duration','volume', 'fullscreen'],
       strectching: 'auto'
     });

let video = document.getElementById('video');
let text = document.querySelectorAll('span');
let textSelect = document.getElementById('textSelect');

// Highlighting Text
video.addEventListener("timeupdate", () => {
 for (let i = 0; i < text.length; i++){
   if(video.currentTime > text[i].getAttribute('data-start') && video.currentTime <= text[i].getAttribute('data-end')){
     text[i].style.color = '#42aaf4';
   } else {
     text[i].style.color = '#000';
   }
 }
});

// Clicked Text Jump on Video
textSelect.addEventListener('click',(e) => {
 if (e.target.tagName == ('SPAN')){
   video.currentTime = +e.target.getAttribute('data-start');
   video.play();
 }
});
