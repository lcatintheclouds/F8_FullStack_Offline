var content = `<h1>Học lập trình không khó tại F8. Học lập trình không khó tại F8</h1>`;
var keyword = "trình";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
content =
  content.slice(0, position) +
  "<span>" +
  content.slice(position, position + keyword.length) +
  "</span>" +
  content.slice(position + keyword.length);
document.write(content);
