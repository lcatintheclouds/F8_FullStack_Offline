const imageContainer = document.querySelector(".image-container");
const loader = document.querySelector(".loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

const count = 30;
const apiKey = "https://2828dq-8080.csb.app";
// const apiKey = "http://localhost:3000";

function imageLoaded() {
  console.log(imagesLoaded);
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    console.log("ready =", ready);
  }
}

function setAttributes(element, Attributes) {
  for (const key in Attributes) {
    element.setAttribute(key, Attributes[key]);
  }
}

function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log("total images", totalImages);
  for (let i = 0; i < photosArray.length; i++) {
    const img = document.createElement("img");
    setAttributes(img, {
      src: `https://fastly.picsum.photos/id/1077/960/1280.jpg?hmac=ziOV19qL7PK073Yv80G4jp6Z8byhy-6Ay-AtsPH3aHs`,
      alt: `${photosArray[i]}`,
    });
    img.addEventListener("load", imageLoaded);
    imageContainer.appendChild(img);
  }
}

async function getPhotos() {
  try {
    const response = await fetch(`${apiKey}/products`);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
