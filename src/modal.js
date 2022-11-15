import { eliminarDelCarrito } from "./carrito.js";

const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('boton-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

modalCarrito.addEventListener('click', (e) => { 
    e.stopPropagation(); 
    /* Accede al objeto evento que tenga la clase boton-eleminar que le dió con la función agregarAlCarrito o pintarCarrito  */
    if (e.target.classList.contains('boton-eliminar')) { 
        eliminarDelCarrito(e.target.value) 
    };
});