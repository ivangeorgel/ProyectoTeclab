document.addEventListener('DOMContentLoaded', function() {
  
  //  Agregar al carrito
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  if (addToCartButtons) {
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
  }

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
  
  //  Mostrar diapositivas de fondo
  const slides = document.querySelectorAll('.background-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        showSlide(currentSlide + 1);
      });
    }
  }
  
  //  Barra de navegación
  const barraNavegacion = document.getElementById('barraNavegacion');
  if (barraNavegacion) {
    barraNavegacion.addEventListener('mouseover', function() {
      this.style.backgroundColor = '';
    });
  }

  //  Validaciones del formulario
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const nombre = document.getElementById('Nombre').value;
        const email = document.getElementById('Email').value;
        const mensaje = document.getElementById('Mensaje').value;

        
        if (nombre === '') {
            alert('Por favor, ingresa tu nombre.');
            return;
        }

        if (email === '') {
            alert('Por favor, ingresa tu email.');
            return;
        }

        if (mensaje === '') {
            alert('Por favor, ingresa tu mensaje.');
            return;
        }

        
        alert('Su mensaje a sido enviado con éxito.');

        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

        
        form.reset();
    });
  }
});


// Menu de hamburguesa

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}