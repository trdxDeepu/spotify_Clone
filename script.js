console.log("Welcome to spotify");
let songIndex = 0;

let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let playingGif = document.getElementById("playingGif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songs = [
  {
    songName: "Dil Ibaadat",
    filePath: "songs/1.mp3",
    coverPath: "covers/Tu Hi Haqeeqat.jpg",
  },
  {
    songName: "Hale E Dil",
    filePath: "songs/.mp3",
    coverPath: "covers/Hale E Dil.jpg",
  },
  {
    songName: "Tujhe Sochta Hoon",
    filePath: "songs/3.mp3",
    coverPath: "covers/Tujhe Sochta Hoon.jpg",
  },
  {
    songName: "Tu Hi Haqeeqat",
    filePath: "songs/4.mp3",
    coverPath: "covers/Tu Hi Haqeeqat.jpg",
  },
  {
    songName: "DIL TO BACHCHA HAI ",
    filePath: "songs/5.mp3",
    coverPath: "covers/DIL TO BACHCHA HAI.jpg",
  },
  {
    songName: " Tere Hawaale",
    filePath:
      "songs/6.mp3",
    coverPath: "covers/Tere Hawaale.jpg",
  },
  {
    songName: "Tune Jo Na Kaha",
    filePath: "songs/7.mp3",
    coverPath: "covers/kaisa.jpg",
  },
  {
    songName: "Dil Ibaadat",
    filePath: "songs/8.mp3",
    coverPath: "covers/Tune Jo Na Kaha.jpg",
  },
  {
    songName: "Zindagi Bata De ",
    filePath: "songs/9.mp3",
    coverPath: "covers/Zindagi Bata De.jpg",
  },
  {
    songName: "Tera mera Rishta",
    filePath: "songs/10.mp3",
    coverPath: "covers/Tera mera Rishta.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    playingGif.style.opacity = 1;
    console.log("working");
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    playingGif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("click", function (e) {
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

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      playingGif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById('previous').addEventListener('click',()=>{
  songIndex += 1 
})
