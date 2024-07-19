var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var span = progress.querySelector("span");
var timePreview = document.querySelector(".time-preview");

progressBar.addEventListener("mousedown", function (e) {
  //   console.log("ok chưa?");
  if (e.which !== 1) {
    return;
  }
  var x = e.offsetX;
  var width = progressBar.clientWidth;
  var percent = (x / width) * 100;
  progress.style.width = `${percent}%`;
  //   console.log(x);
  initialClientX = e.clientX;
  moveSpace = offsetX;
  lastMoveSpace = offsetX;
  audio.currentTime = (rate / 100) * audio.duration;
  document.addEventListener("mousemove", handleDrag);
});
progressBar.addEventListener("mousemove", function (e) {
  var x = e.offsetX;
  var width = progressBar.clientWidth;
  var percent = (x / width) * 100;
  var previewTimeEL = (percent / 100) * audio.duration;
  timePreview.style.display = "block";
  timePreview.style.left = `${e.offsetX}px`;
  timePreview.style.top = `${-5}px`;
  timePreview.innerText = getTimeFormat(previewTimeEL);
});
progressBar.addEventListener("mouseleave", function () {
  timePreview.style.display = "none";
});
span.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function (e) {
  document.removeEventListener("mousemove", handleDrag);
  lastMoveSpace = moveSpace;
});
var initialClientX = 0;
var moveSpace = 0;
var lastMoveSpace = 0;
function handleDrag(e) {
  //   console.log(initialClientX);
  moveSpace = e.clientX - initialClientX + lastMoveSpace;
  var width = progressBar.clientWidth;
  var percent = (moveSpace / width) * 100;
  if (percent < 0) {
    percent = 0;
  }
  if (percent > 100) {
    percent = 100;
  }
  progress.style.width = `${percent}%`;
  audio.currentTime = (percent / 100) * audio.duration;
}

// Xử lý thẻ audio
var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playActionEl = document.querySelector(".play-action i");
// console.log(durationEl);
// console.log(audio.duration);
var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
window.addEventListener("load", function () {
  //   audio.play();
  durationEl.innerText = getTimeFormat(audio.duration);
});
playActionEl.addEventListener("click", function () {
  //   console.log("ok chưa?");
  // audio.paused ==> kiểm tra xem nhạc có đang dừng hay không?
  // audio.play() ==> Phát nhạc
  // audio.pause() ==> Dừng nhạc
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
audio.addEventListener("play", function () {
  //   console.log("Đang phát nhạc");
  playActionEl.classList.replace("fa-play", "fa-pause");
});
audio.addEventListener("pause", function () {
  //   console.log("Đang dừng nhạc");
  playActionEl.classList.replace("fa-pause", "fa-play");
});

audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;
  var duration = audio.duration;
  var percent = (currentTime / duration) * 100;
  progress.style.width = `${percent}%`;
  currentTimeEl.innerText = getTimeFormat(currentTime);
  //   if (currentTime == duration) {
  //     playActionEl.classList.replace("fa-pause", "fa-play");
  //   }
});
var btnKaraoke = document.querySelector(".btn-Karaoke");
var lyricEL = document.querySelector(".lyric");
function clickKaraoke() {
  lyricEL.style.display = "block";
  setTimeout(() => {
    lyricEL.style.transform = "translate(0, 0)";
  }, 100);
}
function backKaraoke() {
  lyricEL.style.display = "block";
  lyricEL.style.transform = "translate(0, 1000px)";
  setTimeout(() => {
    lyricEL.style.display = "none";
  }, 100);
}
