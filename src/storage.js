/* Esta función guarda en el storage los productos que hay en el carrito de compras*/
const guardarCarritoStorage = (carritoDeCompras) => { 
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras)); 
};

/* Esta funcion obtiene el array guardado en guardarCarritoStorage*/
const obtenerCarritoStorage = () => { 
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage; 
};

export {guardarCarritoStorage, obtenerCarritoStorage};
