const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const actionEl = document.querySelector(".action");
const resultEl = document.querySelector(".result");

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)();
recognition.lang = "vi-VN";
recognition.onstart = () => {
  actionEl.innerHTML = "Hãy nói nội dung bạn muốn";
};
recognition.onresult = (event) => {
  const newTrans = event.results[0][0].transcript.trim().toLowerCase();
  console.log(newTrans);
  if (newTrans.includes("Google", "google")) {
    resultEl.innerHTML = "Đang thực hiện: " + newTrans;
    resultEl.style.display = "block";
    setTimeout(() => {
      window.open("https://google.com");
      resultEl.innerHTML = "Đã thực hiện: " + newTrans;
    }, 1000);
  }
  if (newTrans.includes("youtube")) {
    resultEl.innerHTML = "Đang thực hiện: " + newTrans;
    resultEl.style.display = "block";
    setTimeout(() => {
      window.open("https://youtube.com");
      resultEl.innerHTML = "Đã thực hiện: " + newTrans;
    }, 1000);
  }
  if (newTrans.includes("Facebook", "facebook")) {
    resultEl.innerHTML = "Đang thực hiện: " + newTrans;
    resultEl.style.display = "block";
    setTimeout(() => {
      window.open("https://facebook.com");
      resultEl.innerHTML = "Đã thực hiện: " + newTrans;
    }, 1000);
  }
  if (newTrans.includes("Google Drive", "drive")) {
    resultEl.innerHTML = "Đang thực hiện: " + newTrans;
    resultEl.style.display = "block";
    setTimeout(() => {
      window.open("https://drive.google.com");
      resultEl.innerHTML = "Đã thực hiện: " + newTrans;
    }, 1000);
  }
  if (newTrans.includes("Google Maps", "maps")) {
    resultEl.innerHTML = "Đang thực hiện: " + newTrans;
    resultEl.style.display = "block";
    setTimeout(() => {
      window.open("https://maps.google.com");
      resultEl.innerHTML = "Đã thực hiện: " + newTrans;
    }, 1000);
  }
  if (
    newTrans.includes("chỉ đường", "chỉ", "tới", "đường tới", "chỉ đường tới")
  ) {
    resultEl.innerHTML = "Đang thực hiện: " + newTrans;
    resultEl.style.display = "block";
    setTimeout(() => {
      window.open("https://maps.google.com");
      resultEl.innerHTML = "Đã thực hiện: " + newTrans;
    }, 1000);
  }
  if (newTrans.includes("video", "mở video", "xem video", "clip")) {
    resultEl.innerHTML = "Đang thực hiện: " + newTrans;
    resultEl.style.display = "block";
    setTimeout(() => {
      window.open("https://youtube.com");
      resultEl.innerHTML = "Đã thực hiện: " + newTrans;
    }, 1000);
  }
  if (newTrans.includes("mở bài hát", "nghe bài hát")) {
    resultEl.innerHTML = "Đang thực hiện: " + newTrans;
    resultEl.style.display = "block";
    setTimeout(() => {
      window.open("https://zingmp3.vn");
      resultEl.innerHTML = "Đã thực hiện: " + newTrans;
    }, 1000);
  }
};

recognition.onspeechend = () => {
  actionEl.innerHTML = "Đã nói xong. Hy vọng kết quả như ý bạn";
};
recognition.onerror = () => {
  resultEl.innerHTML = "Không thực hiện được yêu cầu";
  resultEl.style.display = "block";
};
btnEl.addEventListener("click", () => {
  recognition.start();
});
