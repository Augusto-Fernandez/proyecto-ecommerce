import {mostrarProductos} from "./App.js";
import {confirmarCompra, pintarCarrito} from "./src/carrito.js";
import {actualizarCarrito} from "./src/actualizarCarrito.js";
import {obtenerCarritoStorage} from "./src/storage.js";


document.addEventListener('DOMContentLoaded', () => { /*11)Hace que primero se cargue el html y despues se ejecuten las funciones que deben ejecutar al momento de la carga (2)*/
    mostrarProductos(); /*11) Reenderiza los productos cuando se carga el html (2)*/

    if (localStorage.getItem('carrito')) { /*13) comprueba si hay productos en el local storage. En caso de no encontrar devuelve undefined (2)*/
        const carrito = obtenerCarritoStorage();/*13) almacena en la constante lo que hay en el local storage (2)*/
        pintarCarrito(carrito); /*14) pinta los productos en el carrito. Por lo que entendí se hace así porque agregarAlCarrito los pinta una vez que se presiona el boton, en cambio pintarCarrito los pinta apenas se carga la página  (2)*/
        actualizarCarrito(carrito); /*8) Calcula los valores totales y la cantidad de productos. Tiene dentro a la función pintarTotalesCarrito que modifica el DOM en precio-total y contador-carrito (1)*/
        confirmarCompra();
    };
});