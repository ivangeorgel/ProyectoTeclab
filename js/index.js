
// CARDS DEL CARRITO
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




// IMAGENES DE FONDO



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

// document.addEventListener('DOMContentLoaded', function () {
//   const data = [
//       { flavor: 'Ligero', value: 70 },
//       { flavor: 'Suave', value: 40 },
//       { flavor: 'Seco', value: 20 },
//       { flavor: 'Débil', value: 60 },
//   ];

//   const bars = document.querySelectorAll('.bar');

//   bars.forEach((bar, index) => {
//       bar.style.width = data[index].value + '%';
//   });
// });




// VALIDACIONES DEL FORMULARIO

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  
  const nombre = document.getElementById('Nombre').value;
  const email = document.getElementById('Email').value;
  const mensaje = document.getElementById('Mensaje').value;

  
  if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, completa todos los campos.');
      return;
  }


  console.log('Nombre:', nombre);
  console.log('Email:', email);
  console.log('Mensaje:', mensaje);
  alert('Formulario enviado con éxito (simulación).');
});