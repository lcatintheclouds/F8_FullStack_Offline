var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var carouselDots = document.querySelector(".carousel-dots");

// Tính width của carousel-inner
var itemWidth = carouselInner.clientWidth;
// Tính total width
var totalWidth = carouselInner.children.length * itemWidth;
// Thay đổi carousel-inner

var position = 0;

function createDots() {
  var children = carouselInner.children;
  for (var i = 0; i < children.length; i++) {
    var dotItem = document.createElement("span");
    dotItem.classList.add("btnDots");
    if (i === 0) {
      dotItem.classList.add("active");
    }
    carouselDots.appendChild(dotItem);
  }
}
function reload() {
  var dotItem = carouselDots.children;
  for (var i = 0; i < dotItem.length; i++) {
    dotItem[i].classList.toggle("active", position === -i * itemWidth);
  }
}

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) + itemWidth >= totalWidth) {
    return;
  }
  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;
  reload();
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) === 0) {
    return;
  }
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
  reload();
});
createDots();
