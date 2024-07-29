var contentEl = document.querySelector(".content");
var countdownEl = contentEl.querySelector(".countdown");
var getLinkBtn = contentEl.querySelector(".getLink-btn");
var timeLeft = 30;
function countdown() {
  countdownEl.innerText = timeLeft;
  if (timeLeft === 0) {
    getLinkBtn.disabled = !getLinkBtn.disabled;
    return;
  }
  getLinkBtn.disabled = true;
  timeLeft--;
  setTimeout(countdown, 1000);
}
getLinkBtn.addEventListener("click", function () {
  window.location.href = "https://fullstack.edu.vn/";
});
window.onload = countdown();
