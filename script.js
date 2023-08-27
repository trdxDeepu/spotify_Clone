console.log("Welcome to spotify");
let songIndex = 0;

let audioElement = new Audio("songs/kaisa ye isq hai.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let playingGif = document.getElementById("playingGif");
let song = [
  {
    songName: "Kaisa ye Isq hai",
    filePath: "songs/kaisa ye isq hai.mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: "Hale E Dil",
    filePath: "songs/Hale e Dil.mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: "Tujhe Sochta Hoon",
    filePath: "songs/Tujhe Sochta Hoon (128 kbps).mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: "Tu Hi Haqeeqat",
    filePath: "songs/Tu Hi Haqeeqat.mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: "DIL TO BACHCHA HAI ",
    filePath: "songs/DIL TO BACHCHA HAI.mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: " Tere Hawaale",
    filePath:
      "songs/Tere Hawaale (Full Video) Laal Singh Chaddha _ Aamir,Kareena _ Arijit,Shilpa _ Pritam,Amitabh,Advait (128 kbps).mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: "Tune Jo Na Kaha",
    filePath: "songs/Tune Jo Na Kaha (128 kbps).mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: "Kaisa ye Isq hai",
    filePath: "songs/kaisa ye isq hai.mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: "Kaisa ye Isq hai",
    filePath: "songs/kaisa ye isq hai.mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: "Tera mera Rishta",
    filePath: "songs/Tera mera Rishta.mp3",
    coverPath: "covers/kaisa.jpg",
  },
];

// audioElement.play();

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    playingGif.style.opacity = 1 
    console.log("working");
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    playingGif.style.opacity = 0
  }
});



audioElement.addEventListener("timeupdate", () => {
    console.log("Current Time:", audioElement.currentTime);
    console.log("Duration:", audioElement.duration);
    
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log("Calculated Progress:", progress);
    
    myProgressBar.value = progress;
});


myProgressBar.addEventListener('click', function(e) {
    // Calculate the clicked position relative to the start of the progress bar
    let clickPosition = e.clientX - this.getBoundingClientRect().left;
     // Calculate the width of the progress bar
    let progressBarWidth = this.offsetWidth;
    // Calculate the click position as a percentage of the total width
    let clickPercentage = clickPosition / progressBarWidth;
    // Calculate the corresponding time in the audio
    let audioDurationTime = clickPercentage * audioElement.duration;
    // Set the audio's current time to the calculated time
    audioElement.currentTime = audioDurationTime;
});
