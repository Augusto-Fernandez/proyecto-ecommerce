import {mostrarProductos} from "./App.js";
import {pintarCarrito} from "./src/carrito.js";
import {actualizarCarrito} from "./src/actualizarCarrito.js";
import {productos} from './src/stock.js';
import {obtenerCarritoStorage} from "./src/storage.js";


document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);

    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarCarrito(carrito);
    };
});