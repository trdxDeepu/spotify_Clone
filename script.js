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
    songName: "Dil to Bachcha hai ",
    filePath: "songs/2.mp3",
    coverPath: "covers/DIL TO BACHCHA HAI.jpg",
  },
  {
    songName: "Hal E Dil",
    filePath: "songs/3.mp3",
    coverPath: "covers/Hale E Dil.jpg",
  },
  {
    songName: "Kaise E Isq hai",
    filePath: "songs/4.mp3",
    coverPath: "covers/Kaisa ye Isq hai.jpg",
  },
  {
    songName: "Tera Mera Rishta",
    filePath: "songs/5.mp3",
    coverPath: "covers/Tera mera Rishta.jpg",
  },
  {
    songName: " Tere Hawaale",
    filePath: "songs/6.mp3",
    coverPath: "covers/Tere Hawaale.jpg",
  },
  {
    songName: "Tune Jo Na Kaha",
    filePath: "songs/8.mp3",
    coverPath: "covers/Tujhe Sochta Hoon.jpg",
  },
  {
    songName: "Tujhe Sochta Hoon",
    filePath: "songs/8.mp3",
    coverPath: "covers/Tujhe Sochta Hoon.jpg",
  },
  {
    songName: "Tune Jo Na Kaha ",
    filePath: "songs/9.mp3",
    coverPath: "covers/Tune Jo Na Kaha.jpg",
  },
  {
    songName: "Zindagi Bta De",
    filePath: "songs/10.mp3",
    coverPath: "covers/Zindagi Bata De.jpg",
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

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      let isPlaying = e.target.classList.contains("fa-pause-circle");

      if (isPlaying) {
        audioElement.pause();
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        
      } else {
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
      }
    });
  }
);

// Optional: a function that sets all songs to the play state (assuming you have such a function)
function makeAllPlays() {
  let allSongs = document.getElementsByClassName("songItemPlay");
  for (let song of allSongs) {
    song.classList.remove("fa-pause-circle");
    song.classList.add("fa-play-circle");
  }
}

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  playingGif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  playingGif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
