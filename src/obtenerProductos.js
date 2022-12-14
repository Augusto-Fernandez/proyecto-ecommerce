/* Esta funcion se encarga de obtener los productos en el archivo json */
const obtenerProductos = async () =>{ 
    try { 
        const response = await fetch('src/data/stock.json'); 
        const data = await response.json(); 
        return data; 
    } catch (error) { 
        console.log("Ocurrió un erroe: ", error);
    }
}

export {obtenerProductos};