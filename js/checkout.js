const tbody = document.querySelector("tbody")

const btnComprar = document.querySelector("button#btnComprar")
const retornarTableHTML = (producto) => {
     return `<tr>
    <td>${producto.imagen}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td><img src="images/icon-fruits-64.png" width="24px"></td>
    </tr>
    `
};

if(carritoFrutas.length > 0){
    tbody.innerHTML = ""
    carritoFrutas.forEach(
        (producto) => (tbody.innerHTML += retornarTableHTML(producto))
    )
}

btnComprar.addEventListener("click", ()=>{
    alert("Muchas gracias por su compra!!!")
    localStorage.removeItem("carritoFrutas")
    tbody.innerHTML = ""
})
