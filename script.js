const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});


// AOS Initialization

  AOS.init({
    duration: 1000, // animation duration in ms
    once: true      // animation happens only once when scrolling
  });

  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );