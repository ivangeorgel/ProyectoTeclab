document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart) {
        Object.keys(cart).forEach(wineId => {
            const quantity = cart[wineId];
            const wineInfo = getWineInfoById(wineId);
            const wineElement = createCartItemElement(wineInfo, quantity);
            cartItemsContainer.appendChild(wineElement);
        });
    } else {
        cartItemsContainer.textContent = "No hay vinos en el carrito.";
    }

    // function getWineInfoById(id) {
    //     // Aquí deberías tener una función que obtenga la información del vino por su ID.
    //     // Esto podría ser un llamado a una API o un objeto local, dependiendo de cómo esté estructurada tu aplicación.
    //     // Por simplicidad, aquí creamos un objeto estático con la información de algunos vinos.
        
        
    //     function getWinesFromCards() {
    //         const wines = [];
    //         const cardElements = document.querySelectorAll('.card');
        
    //         cardElements.forEach(card => {
    //             const name = card.querySelector('h3').innerText;
    //             const priceText = card.querySelector('p:nth-of-type(1)').innerText;
    //             const price = parseFloat(priceText.replace('Precio: $', ''));
    //             const description = card.querySelector('p:nth-of-type(2)').innerText;
        
    //             wines.push({ name, price, description });
    //         });
        
    //         return wines;
    //     }
        
    //     // Ejemplo de uso:
    //     const winesFromCards = getWinesFromCards();
    //     console.log(winesFromCards);



    //     // -----------------
    //     const wines = {
    //         '1': { name: 'Vino 1', price: 20, description: 'Descripción del Vino 1' },
    //         // Otros vinos...
    //     };

    //     return wines[id];
    // }

    function getWineInfoById(id) {
        const wines = {
            '1': { name: 'Magneta', price: 7000, description: 'Vino tinto Malbec.' },
            '2': { name: 'Montecepas', price: 6800, description: 'Vino blanco Cabernet Sauvignon.' },
            '3': { name: 'Sediento', price: 8000, description: 'Vino tindo Malbec Bonarda.' },
        };
    
        return wines[id];
    }
    

    function createCartItemElement(wineInfo, quantity) {
        const wineElement = document.createElement('div');
        wineElement.classList.add('cart-item');
        wineElement.innerHTML = `
            <h3>${wineInfo.name}</h3>
            <p>Precio: $${wineInfo.price}</p>
            <p>Cantidad: ${quantity}</p>
            <p>Descripción: ${wineInfo.description}</p>
        `;
        return wineElement;
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const resetCartButton = document.getElementById('reset-cart'); // Selecciona el botón

    resetCartButton.addEventListener('click', function() {
        localStorage.removeItem('cart'); // Elimina el carrito del almacenamiento local
        cartItemsContainer.innerHTML = "No hay vinos en el carrito."; // Limpia el contenido del contenedor
    });

    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart) {
        Object.keys(cart).forEach(wineId => {
            const quantity = cart[wineId];
            const wineInfo = getWineInfoById(wineId);
            const wineElement = createCartItemElement(wineInfo, quantity);
            cartItemsContainer.appendChild(wineElement);
        });
    } else {
        cartItemsContainer.textContent = "No hay vinos en el carrito.";
    }

    function getWineInfoById(id) {
        // Función para obtener información del vino...
    }

    function createCartItemElement(wineInfo, quantity) {
        // Función para crear elementos de los ítems del carrito...
    }
});





