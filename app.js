const contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarrito = document.getElementById("contenedor-carrito");

const botonVaciar = document.getElementById("vaciar-carrito");

const contadorCarrito = document.getElementById("contador-carrito");

const precioTotal = document.getElementById("precio-total");

const confirmarCompra = document.getElementById("confirmar-compra");

let carrito = [];

botonVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito ();
})

confirmarCompra.addEventListener("click", () => {
    alert("Por favor presione ENTER para confirmar su compra")
    document.addEventListener("keydown", e => {
        if(e.key===13){
            alert("Se confirmó la compra");
        } else {
            alert("No se presionó ENTER");
        }
    })
})

productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <button id="boton${producto.id}">Comprar</button>
                    `;
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
    })
})

const agregarAlCarrito = (idProducto) => {
    const seRepite = carrito.some(producto => producto.id === idProducto);
    if (seRepite){
        const producto = carrito.map (producto => {
            if (producto.id === idProducto){
                producto.cantidad++
                producto.precio = carrito.reduce((acc, producto) => acc + producto.precio, producto.precio);
            }
        })
    } else {
        const item = productos.find((producto) => producto.id === idProducto);
        carrito.push(item);
    }
    actualizarCarrito();
}

const elminarDelCarrito = (idProducto) => {
    const item = carrito.find((producto) => producto.id === idProducto);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = " ";

    carrito.forEach((producto) => {
        const div = document.createElement("div");
        div.className = ("producto-en-carrito");
        div.innerHTML = `
                        <p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p>Cantidad <span id="cantidad">${producto.cantidad}</span></p>
                        <button onclick="elminarDelCarrito(${producto.id})"</button>
        `
        contenedorCarrito.appendChild(div);
    })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.precio, 0);
}
