document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.background-slide');
    let currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    document.getElementById('nextBtn').addEventListener('click', function() {
      showSlide(currentSlide + 1);
    });
  });


  const barraNavegacion = document.getElementById('item-lista');

  barraNavegacion.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'hsl(75, 94%, 57%)';
  });
