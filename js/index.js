

const productos = []
const URL = "js/productos.json"

const container = document.querySelector('div.container'); 




const retornarCardHTML = (producto) => {


    return`<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div> `
}

const activaClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('button.button-outline.button-add')
    if(botonesAgregar !==null){
        botonesAgregar.forEach((button) => {
            button.addEventListener('click', (e)=>{
                agregarAlCarrito(e.target.id)
            })
        })
    }
}







const cargarProductos = (array) => {
    if(array.length > 0) {
    array.forEach((producto) => {
        container.innerHTML += retornarCardHTML(producto)
        });
        activaClickEnBotones();
    }
}




const obtenerProductos = () => {
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> productos.push(...data))
    .then(()=>cargarProductos(productos))
}

obtenerProductos()



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





