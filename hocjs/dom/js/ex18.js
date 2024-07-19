var loading = document.querySelector(".loading");
var spinner = document.querySelector(".spinner");
var img = document.querySelector("img");

window.addEventListener("load", function () {
  setTimeout(function () {
    loading.style.display = "none";
    spinner.style.display = "none";
  }, 2000);
  img.style.display = "block";
  img.style.opacity = 1;
  img.style.transition = "opacity 2s linear";
});
