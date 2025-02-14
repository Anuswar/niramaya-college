/*=============== HEADER ===============*/
document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header-fixed");
    } else {
      header.classList.remove("header-fixed");
    }
  });
});

/*=============== BANNER ===============*/
const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

/*=============== GALLERY ===============*/
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = GLightbox({
    selector: ".glightbox",
  });
});

/*=============== SCROLLTOTOP ===============*/
document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.getElementById("scrollToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollButton.style.display = "flex";
      scrollButton.style.opacity = "1";
    } else {
      scrollButton.style.opacity = "0";
      setTimeout(() => {
        if (window.scrollY <= 200) scrollButton.style.display = "none";
      }, 300);
    }
  });

  scrollButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
