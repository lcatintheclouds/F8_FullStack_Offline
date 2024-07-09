var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var span = progress.querySelector("span");

progressBar.addEventListener("mousedown", function (e) {
  //   console.log("ok chưa?");
  if (e.which !== 1) {
    return;
  }
  var x = e.offsetX;
  var width = progressBar.clientWidth;
  var percent = (x / width) * 100;
  progress.style.width = `${percent}%`;
  document.addEventListener("mousemove", handleDrag);
  //   console.log(x);
  initialClientX = e.clientX;
  moveSpace = offsetX;
  lastMoveSpace = offsetX;
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
