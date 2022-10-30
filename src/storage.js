const guardarCarritoStorage = (carritoDeCompras) => { /*9) esta función guarda en el storage los productos que hay en el carrito de compras (2)*/
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras)); /*9)'carrito' es el nombre con el cual se va a guardar en el storage y el JSON es lo que se va a guardar en el storage. Strigigy toma la array de objetos y lo convierte a formato JSON (2)*/
};

const obtenerCarritoStorage = () => { /*10) esta funcion obtiene el array guardado en guardarCarritoStorage (2)*/
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage; /*10)Se usa return porque el scope de carritoStorage es local y esta funcion se va a usar en otros lados (2)*/
};

export {guardarCarritoStorage, obtenerCarritoStorage};
