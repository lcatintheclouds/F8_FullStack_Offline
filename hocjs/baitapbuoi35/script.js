var contentEl = document.querySelector(".content");
var countdownEl = contentEl.querySelector(".countdown");
var getLinkBtn = contentEl.querySelector(".getLink-btn");
var timeLeft = 30;
function countdown() {
  countdownEl.innerText = timeLeft;
  if (timeLeft === 0) {
    getLinkBtn.disabled = false;
    return;
  }
  getLinkBtn.disabled = true;
  window.requestAnimationFrame(countdown);
  performance.now(timeLeft--);

  // document.addEventListener("visibilitychange", function () {
  // //   if (document.visibilityState === "hidden") {
  // //     paused;
  // //   } else {
  // //     timeLeft = 30;
  // //   }
  // // });
}
getLinkBtn.addEventListener("click", function () {
  window.location.href = "https://fullstack.edu.vn/";
});

window.onload = countdown();
