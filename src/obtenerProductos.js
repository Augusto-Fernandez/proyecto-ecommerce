const obtenerProductos = async () =>{ /*21) obtiene los productos del json (3)*/
    try { /*21) se coloca el codigo que quiere que se intente que se ejecute (3)*/
        const response = await fetch('src/data/stock.json'); /*21) toma stock.json (3)*/
        const data = await response.json(); /*21) transforma el json en array (3)*/
        return data; /*21) (3)*/
    } catch (error) { /*21) manejae el error que ocurra en caso de fallar en el try (3)*/
        console.log("Ocurrió un erroe: ", error);
    }
}

export {obtenerProductos};