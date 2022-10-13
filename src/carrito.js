import {actualizarCarrito} from './actualizarCarrito.js';
import {productos} from './stock.js';
import {obtenerCarritoStorage} from './storage.js';

let carrito = [];

const validarProductoRepetido = (idProducto) => {

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }

    const seRepite = carrito.find(producto => producto.id === idProducto);

    if (seRepite) {
        seRepite.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${seRepite.id}`);
        cantidadProducto.innerText = `cantidad: ${seRepite.cantidad}`;
        actualizarCarrito(carrito);
    } else {
        agregarAlCarrito(idProducto);
    }
};

const agregarAlCarrito = (idProducto) => {
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const producto = productos.find(producto => producto.id === idProducto);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                    `;
    contenedorCarrito.appendChild(div);
    actualizarCarrito(carrito);
};

const pintarCarrito = (carrito) => {
    const contenedorCarrito = document.getElementById("contenedor-carrito");

    contenedorCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                        `;
        contenedorCarrito.appendChild(div);
    });
};

const eliminarDelCarrito = (idProducto) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != idProducto);

    actualizarCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};

export {agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarDelCarrito};