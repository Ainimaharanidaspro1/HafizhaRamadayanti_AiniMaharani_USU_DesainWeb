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
  
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    }
  
    // Set initial slide
    showSlide(currentIndex);
  
    // Auto slide change
    setInterval(nextSlide, 5000); // Ganti setiap 5 detik
  });
  