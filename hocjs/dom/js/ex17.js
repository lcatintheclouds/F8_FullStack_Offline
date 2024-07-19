var init = function () {
  var nav = document.querySelector(".nav");
  var navHeight = nav.clientHeight;
  var body = document.body;
  var navItems = nav.children;
  body.style.paddingTop = navHeight + "px";
  if (navItems.length) {
    Array.from(navItems).forEach(function (navItem) {
      navItem.addEventListener("click", function (e) {
        var sectionId = this.dataset.target;
        if (!sectionId) {
          return;
        }
        var sectionEl = document.querySelector("#" + sectionId);
        var offsetTopSection = sectionEl.offsetTop - navHeight;
        window.scrollTo({
          top: offsetTopSection,
          behavior: "smooth",
        });
      });
    });
  }
  var sectionList = document.querySelectorAll(".content");
  if (sectionList.length) {
    sectionList.forEach(function (section) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var sectionId = entry.target.id;
            var navItemActive = nav.querySelector(".active");
            var navItem = nav.querySelector(
              "[data-target='" + sectionId + "']"
            );
            navItem.classList.add("active");
          }
          if (navItemActive) {
            navItemActive.classList.remove("active");
          }
        });
      });
      observer.observe(el);
    });
    {
      threshold: [0.5],
    }
  }
};

document.addEventListener("DOMContentLoaded", init);
