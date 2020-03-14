var siteNav = document.querySelector(".navbar");
var siteNavBtn = document.querySelector(".navbar__btn-menu-js");

siteNav.classList.remove("navbar__js_nojs");

siteNavBtn.addEventListener("click", function() {
  if (siteNav.classList.contains("navbar__js_closed")) {
    siteNav.classList.remove("navbar__js_closed");
    siteNav.classList.add("navbar__js_opened");
  } else {
    siteNav.classList.add("navbar__js_closed");
    siteNav.classList.remove("navbar__js_opened");
  }
});
