// document.addEventListener("DOMContentLoaded", function () {
const posts = [
  {
    title: "Tiêu đề bài viết 1",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Tiêu đề bài viết 2",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    imageUrl: "https://picsum.photos/200",
  },
  {
    title: "Tiêu đề bài viết 3",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolores ea quas possimus non! Corrupti quae nesciunt ipsam suscipit eum quam repellendus dolores harum sit, laudantium delectus quisquam amet atque.",
    imageUrl: "https://picsum.photos/200",
  },
];

const contentDiv = document.getElementById("content");

posts.forEach((post) => {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  const img = document.createElement("img");
  img.src = post.imageUrl;
  img.alt = post.title;

  const textDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.innerText = post.title;

  const content = document.createElement("p");
  content.innerText = post.content;

  textDiv.appendChild(title);
  textDiv.appendChild(content);

  postDiv.appendChild(img);
  postDiv.appendChild(textDiv);

  contentDiv.appendChild(postDiv);
});
