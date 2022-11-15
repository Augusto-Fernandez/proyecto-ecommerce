import {actualizarCarrito} from './actualizarCarrito.js';
import {obtenerCarritoStorage} from './storage.js';
import {obtenerProductos} from "./obtenerProductos.js";

let carrito = [];

/* Esta funcion revisa que haya valores en el storage y luego se valida si está repetido*/
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

/* Esta funcion se encarga de agregar los productos en el carrito */
const agregarAlCarrito = async (idProducto) => { 
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const carritoVacio = document.getElementById("validar-carrito");
    const productos = await obtenerProductos();
    const producto = productos.find(producto => producto.id === idProducto);
    carrito.push(producto);
    carritoVacio.innerHTML='';

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

/* Esta funcion agrega los productos al carrito cuando se carga la pagina*/
const pintarCarrito = (carrito) => { 
    const contenedorCarrito = document.getElementById("contenedor-carrito");

    contenedorCarrito.innerHTML = '';
    validarCarrito(); 

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

/* Esta funcion elimina producto de uno por vez haciendo un nuevo array con los productos que no fueron eliminados */
const eliminarDelCarrito = (idProducto) => { 
    const carritoStorage = obtenerCarritoStorage(); 
    const carritoActualizado = carritoStorage.filter(producto => producto.id != idProducto); 

    actualizarCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};

/* Esta funcion redirige al formulario de compra en caso de que haya productos en el carrito, del caso contrario emite una alert informando que el carrito esta vacio */
const confirmarCompra = () => {
    const botonCompra = document.getElementById("confirmar-compra");
    
    botonCompra.addEventListener('click', () =>{
        if (localStorage.getItem('carrito')) { 
            carrito = obtenerCarritoStorage();
        }
        if(carrito.length>0){
            redireccionFormulario();
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No hay productos en el carrito',
              })
        }
    })

}

/* Esta funcion se ejecuta una vez que se valido que el hay productos en carrito para poder redirigir al formulario */
const redireccionFormulario = () =>{
    location.href = "./form/formulario.html";
    const carritoStorage = obtenerCarritoStorage(); 
    const carritoActualizado = carritoStorage.filter(producto => producto.length<1); 

    actualizarCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
}

/* Esta funcion borra todos los productos en el carrito */
const vaciarCarrito = () =>{
    const botonVaciar = document.getElementById("vaciar-carrito");
    botonVaciar.addEventListener('click', () =>{
        const carritoStorage = obtenerCarritoStorage(); 
        const carritoActualizado = carritoStorage.filter(producto => producto.length<1); 

        actualizarCarrito(carritoActualizado);
        pintarCarrito(carritoActualizado);
    })
}

/* Esta funcion crea el mensaje de que no hay productos en el carrito en el caso de que este vacio */
const validarCarrito = () =>{
    const carritoVacio = document.getElementById("validar-carrito");
    if (localStorage.getItem('carrito')) { 
        carrito = obtenerCarritoStorage();
    }
    if(carrito.length<1){
        carritoVacio.innerText="No hay productos en el carrito"
    }
}

export {agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarDelCarrito, confirmarCompra, vaciarCarrito};