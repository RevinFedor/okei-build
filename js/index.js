const gif = document.querySelector(".scope_gif_img");
const gif_block = document.querySelector(".scope_gif_block");
const content = document.querySelector(".scope");

document.onscroll = function () {
  if (document.body.scrollTop > 200) {
    console.log("hello");
  }
};

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let scrollSection = content.getBoundingClientRect().top;
  let scrollSectionHeight = content.offsetHeight;
  // Если экран перед блоком
  if (scrollSection > 0) {
    gif.classList.remove("fixed");
    gif_block.style.bottom = "";
  }
  // если экран достигает блока
  if (scrollSection < 100) {
    gif.classList.add("fixed");
  }
  // если экран выходит за блок
  if (scrollSection < -scrollSectionHeight + 700) {
    gif_block.style.bottom = '175px';
    gif.classList.remove("fixed");
  }
});
setInterval(() => {
  gif.src = "../images/gid.gif";
}, 7000);
