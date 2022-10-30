import {actualizarCarrito} from './actualizarCarrito.js';
import {obtenerCarritoStorage} from './storage.js';
import {obtenerProductos} from "./obtenerProductos.js";

let carrito = [];

const validarProductoRepetido = (idProducto) => {

    if (localStorage.getItem('carrito')) { /*17) No se guardaba correctamente la cantidad de productos, con este linea de codigo se actualiza el contenido de la array con lo que hay guardado en el local storage (2)*/
    /*18) Esta linea se encontraba despues de seRepite, se coloco antes porque seRepita buscar valores en una array que puede que aún no exista. Primero se revisa que haya algo en el storage y luego se valida si está repetido (2)*/
        carrito = obtenerCarritoStorage();
    }

    const seRepite = carrito.find(producto => producto.id === idProducto); /*4) busca en carrito(1)*/

    if (seRepite) {
        seRepite.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${seRepite.id}`);
        cantidadProducto.innerText = `cantidad: ${seRepite.cantidad}`;
        actualizarCarrito(carrito); /*8) Calcula los valores totales y la cantidad de productos. Tiene dentro a la función pintarTotalesCarrito que modifica el DOM en precio-total y contador-carrito (1)*/
    } else {
        agregarAlCarrito(idProducto); /*5) agregar producto al carrito (1)*/
    }
};

const agregarAlCarrito = async (idProducto) => { /*5) agrega producto al carrito(1)*/
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const productos = await obtenerProductos();
    const producto = productos.find(producto => producto.id === idProducto);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button> 
                    `; /*20) se le da un value al botín porque despues se va a usar en el modal para borrarlo (2)*/
    contenedorCarrito.appendChild(div);
    actualizarCarrito(carrito); /*8) Calcula los valores totales y la cantidad de productos. Tiene dentro a la función pintarTotalesCarrito que modifica el DOM en precio-total y contador-carrito (1)*/
};

const pintarCarrito = (carrito) => { /*14) pinta los productos en el carrito. Por lo que entendí se hace así porque agregarAlCarrito los pinta una vez que se presiona el boton, en cambio pintarCarrito los pinta apenas se carga la página  (2)*/
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    /*14) no hace carrito.push porque obtiene los productos desde el local storage (2)*/

    contenedorCarrito.innerHTML = ''; /*16) vacia el carrito antes que se pinten los articulos que vienen del local storage (2)*/

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button> 
                        `;/*20) se le da un value al botín porque despues se va a usar en el modal para borrarlo (2)*/
        contenedorCarrito.appendChild(div);
    });
};

const eliminarDelCarrito = (idProducto) => { /*19) Recive le id del producto a eliminar(2)*/
    const carritoStorage = obtenerCarritoStorage(); /*19) obtiene los productos del storage (2)*/
    const carritoActualizado = carritoStorage.filter(producto => producto.id != idProducto); /*19) Filtra en un nuevo array los productos que no fueron eliminados  (2)*/

    actualizarCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};

export {agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarDelCarrito};