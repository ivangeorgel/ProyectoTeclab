
const carritoVino = []

const agregarAlCarrito = (vinosId) => {
    if (vinosId > 0){
        const productoEncontrado = productos.find((producto) => producto.id === parseInt(vinosId))
        if(productoEncontrado !== undefined){
            carritoVinos.push(productoEncontrado)
            almacenarCarrito()
        }
    }
}

const almacenarCarrito = () => {
    carritoVinos.length > 0 && localStorage.setItem('carritoVinos', JSON.stringify(carritoVinos))
}

const recuperarCarrito = () => {

return JSON.parse(localStorage.getItem('carritoVinos')) || []
}

const carritoVinos = recuperarCarrito()