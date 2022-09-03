// --------------------------animation on slider---------------------------//
let btn = document.querySelectorAll(".active_btn");
for (let j = 0; j < btn.length; j++) {
  btn[j].addEventListener("click", function () {
    let mainTitle = document.querySelectorAll(".landing-title");
    let mainBtn = document.querySelectorAll(".landing-btn");
    let mainPara = document.querySelectorAll(".landing-para");

    for (let i = 0; i < mainTitle.length; i++) {
      mainTitle[i].classList.add(
        `animate__animated`,
        `animate__zoomIn`,
        `animate__slower`
      );
      mainBtn[i].classList.add(
        `animate__animated`,
        `animate__fadeInUp`,
        `animate__slow`
      );
      mainPara[i].classList.add(
        `animate__animated`,
        `animate__zoomInRight`,
        `animate__slow`
      );
    }
  });
}
// --------------------------counter---------------------------//
let counter = document.querySelector("#counter");
let counter2 = document.querySelector("#counter2");
let counter3 = document.querySelector("#counter3");
let counter4 = document.querySelector("#counter4");

function counterNumb(start, end, elem, countNum, timer) {
  let i = start;
  let set = setInterval(() => {
    if (i == end) {
      clearInterval(set);
    } else {
      i += countNum;
      elem.innerText = i;
    }
  }, timer);
}
let flag = true;
window.addEventListener("scroll", function () {
  if (window.scrollY > 1200 && window.scrollY < 1300) {
    if (flag) {
      counterNumb(100, 8000, counter, 100, 20);
      counterNumb(10, 810, counter2, 20, 50);
      counterNumb(100, 2000, counter3, 50, 60);
      counterNumb(10, 20, counter4, 1, 100);
    }
    flag=false
  } 
  
  
});