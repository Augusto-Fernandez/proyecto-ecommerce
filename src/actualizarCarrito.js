import { guardarCarritoStorage } from "./storage.js";

const actualizarCarrito = (carrito) => { /*7) esta funcion suma las cantidades y los precios, lo pasá a pintarTotalesCarrito para que modifique el DOM (1)*/
    const cantidadTotal = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    const totalCompra = carrito.reduce((acc, producto) => acc + (producto.precio*producto.cantidad), 0);

    pintarTotalesCarrito(cantidadTotal,totalCompra);
    guardarCarritoStorage(carrito); /*15) guarda en el storage las modificaciones de la array (2)*/
}

const pintarTotalesCarrito = (cantidadTotal, totalCompra) => {
    const contadorCarrito = document.getElementById("contador-carrito");
    const precioTotal = document.getElementById("precio-total");

    contadorCarrito.innerText = cantidadTotal;
    precioTotal.innerText = totalCompra;
}

export {actualizarCarrito};