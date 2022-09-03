// --------------------------scroll to top---------------------------//
let btnTop = document.getElementById("btn-top");
btnTop.style.transition = "all 0.5s";
window.addEventListener("scroll", function () {
  if (this.document.documentElement.scrollTop > 400) {
    btnTop.style.opacity = 1;
  } else {
    btnTop.style.opacity = 0;
  }
});

// --------------------------navbar sticky---------------------------//
let stickyNav = document.querySelector(".bottom-nav");
stickyNav.style.transition = "all 5s";
window.addEventListener("scroll", function () {
  stickyNav.classList.toggle("sticky-top", window.scrollY > 200);
});




