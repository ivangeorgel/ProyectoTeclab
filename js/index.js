document.addEventListener('DOMContentLoaded', function() {
  // Asegurarse de que todos los elementos existen antes de agregarles eventos
  
  // 1. Agregar al carrito
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
  
  // 2. Mostrar diapositivas de fondo
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
  
  // 3. Barra de navegación
  const barraNavegacion = document.getElementById('barraNavegacion');
  if (barraNavegacion) {
    barraNavegacion.addEventListener('mouseover', function() {
      this.style.backgroundColor = '';
    });
  }

  // 4. Validaciones del formulario
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener los valores de los campos
        const nombre = document.getElementById('Nombre').value;
        const email = document.getElementById('Email').value;
        const mensaje = document.getElementById('Mensaje').value;

        // Validar los campos
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

        // Aquí puedes agregar más lógica para enviar el formulario a un servidor si es necesario.
        alert('Su mensaje a sido enviado con éxito.');

        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);

        // Puedes resetear el formulario si quieres
        form.reset();
    });
  }
});
