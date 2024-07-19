var input = document.querySelector(".input");
var beforeUnloadHandler = function (e) {
  e.preventDefault();
  e.returnValue = true;
};
input.addEventListener("input", function (e) {
  var value = e.target.value;
  var defaultValue = e.target.defaultValue;
  if (value !== defaultValue) {
    window.addEventListener("beforeunload", beforeUnloadHandler);
  } else {
    window.removeEventListener("beforeunload", beforeUnloadHandler);
  }
});
