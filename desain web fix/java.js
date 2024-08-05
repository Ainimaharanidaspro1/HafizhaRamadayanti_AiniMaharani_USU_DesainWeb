function learnMore() {
  window.location.href = "#about";
}

function toggleMenu() {
  const nav = document.querySelector("header nav ul");
  nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const dropdownMenu = document.getElementById("dropdown-menu");

  menuIcon.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
  });

  // Tutup menu dropdown jika pengguna mengklik di luar menu
  document.addEventListener("click", function (event) {
    if (
      !menuIcon.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    "Selamat Datang",
    "Badan Eksekutif Mahasiswa",
    "ITBA DCC Kampus Kab. Lampung Utara",
  ];

  let index = 0;
  const displayMessage = () => {
    if (index < messages.length) {
      document.querySelector(".welcome-message h1").textContent =
        messages[index++];
      setTimeout(displayMessage, 2000);
    }
  };

  displayMessage();
});

//carousel//
const carouselItems = document.querySelectorAll('.carousel-item');
let currentSlide = 0;

setInterval(() => {
  carouselItems[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % carouselItems.length;
  carouselItems[currentSlide].style.opacity = 1;
}, 5000); // ganti slide setiap 5 detik


var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

