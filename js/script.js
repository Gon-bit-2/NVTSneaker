// Thay đổi banner
var index1 = 0;
changeImage = function () {
  var banners = [
    "img/banner/banner4.png",
    "img/banner/banner1.png",
    " img/banner/banner2.png",
    "img/banner/banner3.png",
  ];
  document.getElementById("banner").src = banners[index1];
  index1++;
  if (index1 == 4) {
    index1 = 0;
  }
};
setInterval(changeImage, 2500);

//
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
//
let slides = document.querySelectorAll(".slide-container");
let index = 0;

next = function () {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

prev = function () {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};
setInterval(next, 3000);

//
document.querySelectorAll(".featured-image-1").forEach((image_1) => {
  image_1.addEventListener("click", () => {
    var src = image_1.getAttribute("src");
    document.querySelector(".big-image-1").src = src;
  });
});

document.querySelectorAll(".featured-image-2").forEach((image_2) => {
  image_2.addEventListener("click", () => {
    var src = image_2.getAttribute("src");
    document.querySelector(".big-image-2").src = src;
  });
});

document.querySelectorAll(".featured-image-3").forEach((image_3) => {
  image_3.addEventListener("click", () => {
    var src = image_3.getAttribute("src");
    document.querySelector(".big-image-3").src = src;
  });
});

document.querySelectorAll(".featured-image-5").forEach((image_5) => {
  image_5.addEventListener("click", () => {
    var src = image_5.getAttribute("src");
    document.querySelector(".big-image-5").src = src;
  });
});
