var btns = document.querySelector(".btn");
var lists = document.querySelector(".menu_child");

var itemChild = document.querySelectorAll(".menu_title");

var calcSubmenu = function () {
  var css = {};
};

itemChild.forEach(function (item) {
  //   console.log(item.nextElementSibling);
  if (item.nextElementSibling) {
    item.parentElement.classList.add("has-child");
  }
  item.addEventListener("click", function (e) {
    // console.log(item.nextElementSibling);
    // item.nextElementSibling.classList.remove("hidden");
    e.preventDefault();
    // item.nextElementSibling.classList.toggle("active");
    if (item.nextElementSibling) {
      var menuItemActive = document.querySelector(
        ".menu-child.item-child.active"
      );
      //   this.parentElement.classList.remove("hidden");
      this.parentElement.classList.toggle("active");
      if (menuItemActive) {
        menuItemActive.classList.remove("active");
      }
    }
  });
});
