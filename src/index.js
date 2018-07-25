const header = document.querySelector(".js-header");

const handleScroll = event => {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 100) {
    header.classList.add("black");
  } else {
    header.classList.remove("black");
  }
};

window.addEventListener("scroll", handleScroll);
