const header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 20) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
