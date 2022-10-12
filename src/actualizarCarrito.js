import { guardarCarritoStorage } from "./storage.js";

const actualizarCarrito = (carrito) => {
    const cantidadTotal = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    const totalCompra = carrito.reduce((acc, producto) => acc + (producto.precio*producto.cantidad), 0);

    pintarTotalesCarrito(cantidadTotal,totalCompra);
    guardarCarritoStorage(carrito);
}

const pintarTotalesCarrito = (cantidadTotal, totalCompra) => {
    const contadorCarrito = document.getElementById("contador-carrito");
    const precioTotal = document.getElementById("precio-total");

    contadorCarrito.innerText = cantidadTotal;
    precioTotal.innerText = totalCompra;
}

export {actualizarCarrito};