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
  // $(".hover").mouseleave(
  //   function () {
  //     $(this).removeClass("hover");
  //   }
  // );

  // service section js

document.querySelectorAll(".wow-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 12;
    const rotateY = ((x / rect.width) - 0.5) * -12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) translateY(0)";
  });
});

//Testimonial

$(document).ready(function () {

  if (window.matchMedia("(min-width: 576px)").matches) {

    let carouselInner = $(".carousel-inner");
    let cardWidth = $(".carousel-item").outerWidth(true);
    let scrollPosition = 0;
    let autoScroll;

    function startAutoScroll() {
      autoScroll = setInterval(function () {
        if (scrollPosition < carouselInner[0].scrollWidth - cardWidth * 2) {
          scrollPosition += cardWidth;
        } else {
          scrollPosition = 0;
        }
        carouselInner.animate({ scrollLeft: scrollPosition }, 600);
      }, 3000);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    startAutoScroll();

    $(".carousel-control-next").click(function () {
      stopAutoScroll();
      if (scrollPosition < carouselInner[0].scrollWidth - cardWidth * 2) {
        scrollPosition += cardWidth;
      }
      carouselInner.animate({ scrollLeft: scrollPosition }, 600);
      startAutoScroll();
    });

    $(".carousel-control-prev").click(function () {
      stopAutoScroll();
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
      }
      carouselInner.animate({ scrollLeft: scrollPosition }, 600);
      startAutoScroll();
    });
  }
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateX(${ -y / 20 }deg) rotateY(${ x / 20 }deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

const inner = document.querySelector(".carousel-inner");
inner.innerHTML += inner.innerHTML;

let speed = 0.5;

function autoScroll() {
  inner.scrollLeft += speed;
  if (inner.scrollLeft >= inner.scrollWidth / 2) {
    inner.scrollLeft = 0;
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();

