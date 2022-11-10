import {mostrarProductos} from "./App.js";
import {confirmarCompra, pintarCarrito, vaciarCarrito} from "./src/carrito.js";
import {actualizarCarrito} from "./src/actualizarCarrito.js";
import {obtenerCarritoStorage} from "./src/storage.js";


document.addEventListener('DOMContentLoaded', () => { 
    mostrarProductos(); 

    if (localStorage.getItem('carrito')) { 
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito); 
        actualizarCarrito(carrito); 
        confirmarCompra();
        vaciarCarrito();
    };
});