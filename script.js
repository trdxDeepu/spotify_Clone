console.log("Welcome to spotify")
let songIndex = 0;
let audioElement = new Audio('songs/kaisa ye isq hai.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressBar')
let song = [
    {songName : "Kaisa ye Isq hai",filePath:"songs/kaisa ye isq hai.mp3",coverPath:"covers/kaisa.jpg"},
    {songName : "Kaisa ye Isq hai",filePath:"songs/Hale e Dil.mp3",coverPath:"covers/kaisa.jpg"},
    {songName : "Kaisa ye Isq hai",filePath:"songs/Tujhe Sochta Hoon (128 kbps).mp3",coverPath:"covers/kaisa.jpg"},
    {songName : "Kaisa ye Isq hai",filePath:"songs/kaisa ye isq hai.mp3",coverPath:"covers/kaisa.jpg"},
    {songName : "Kaisa ye Isq hai",filePath:"songs/kaisa ye isq hai.mp3",coverPath:"covers/kaisa.jpg"},
    {songName : "Kaisa ye Isq hai",filePath:"songs/kaisa ye isq hai.mp3",coverPath:"covers/kaisa.jpg"},
    {songName : "Kaisa ye Isq hai",filePath:"songs/kaisa ye isq hai.mp3",coverPath:"covers/kaisa.jpg"},
    {songName : "Kaisa ye Isq hai",filePath:"songs/kaisa ye isq hai.mp3",coverPath:"covers/kaisa.jpg"},
    {songName : "Kaisa ye Isq hai",filePath:"songs/kaisa ye isq hai.mp3",coverPath:"covers/kaisa.jpg"},
    {songName : "Tera Mera Rishta",filePath:"songs/Tera mera Rishta.mp3",coverPath:"covers/kaisa.jpg"}
]

// audioElement.play();

masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        console.log("working")
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
    }
})


document.addEventListener('time')

myProgressBar.addEventListener("timeupdate",()=>{
    console.log('timeupdate')
})