let searchBtn = document.querySelector(".seachBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");
let header = document.querySelector("header");
let navigation = document.querySelector(".navigation");
let menutoggle = document.querySelector("menutoggle");
let header = document.querySelector("header");
searchBtn.onclick = function () {
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
  searchBtn.classList.add("active");
  menutoggle.classList.add("hide");
  header.classList.remove("open");
};
closeBtn.onclick = function () {
  searchBox.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBox.classList.remove("active");
  searchBox.classList.remove("hide");
};
menutoggle.onclick = function () {
  header.classList.toggle("open");
  closeBtn.classList.remove("active");
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
};
