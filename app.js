const contenedorProductos = document.getElementById("contenedor-productos");

carrito = [];

productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <button id=boton${producto.id}>Comprar</button>
                    `;
    contenedorProductos.appendChild(div);
})

productos.forEach(producto => {
    let pregunta = Number(prompt("Por favor elige un producto:\nProducto 1 $900\nProducto 2 $700\nProducto 3 $1100"));
    const agregarAlCarrito = () =>{
        const item = productos.find((prod) => prod.id === pregunta);
        carrito.push(item);
    }
    agregarAlCarrito();
})

const precioTotal = carrito.reduce((acc, elemento) => acc + elemento.precio, 0);
alert("El precio total de la compra es: $"+precioTotal);




