document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
  });

  function addToCart(event) {
      const button = event.target;
      const wineId = button.getAttribute('data-id');
      const existingItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
      
      if (existingItems[wineId]) {
          existingItems[wineId]++;
      } else {
          existingItems[wineId] = 1;
      }

      localStorage.setItem('cart', JSON.stringify(existingItems));
  }
});




// -----------------------------------



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





//-----------------------------------------------------------------------





// Grafico

document.addEventListener('DOMContentLoaded', function () {
  const data = [
      { flavor: 'Ligero', value: 70 },
      { flavor: 'Suave', value: 40 },
      { flavor: 'Seco', value: 20 },
      { flavor: 'Débil', value: 60 },
  ];

  const bars = document.querySelectorAll('.bar');

  bars.forEach((bar, index) => {
      bar.style.width = data[index].value + '%';
  });
});
