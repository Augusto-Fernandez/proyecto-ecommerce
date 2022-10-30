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

modalCarrito.addEventListener('click', (e) => { /*20) Lo hace por delegación de evento (e), creo que lo hace para trabajar con el objeto evento del click (2)*/
    e.stopPropagation(); /*20) Detiene a propagacion del evento click sobre los elementos a la misma altura del que hizo click. Esto se husó porque al hacer click en el botón de eliminar se producian varios clicks a la vez (2)*/

    if (e.target.classList.contains('boton-eliminar')) { /*20) accede al elemento si tiene la clase boton-eliminar que se le dió en agregarAlCarrito y pintarCarrito (2)*/
        eliminarDelCarrito(e.target.value) /*20) con target se accede al elemento y con value se accede al value del boton que se le dió en agregarAlCarrito y pintarCarrito (2)*/
    };
});