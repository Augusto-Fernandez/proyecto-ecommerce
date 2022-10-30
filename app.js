import {validarProductoRepetido} from "./src/carrito.js";
import {obtenerProductos} from "./src/obtenerProductos.js";

const mostrarProductos = async () => { /*12) anteriormente estaba importado productos del stock.js (2)*/
  const contenedorProductos = document.getElementById("producto-contenedor");
  const productos = await obtenerProductos(); /*22) trae los productos de stock.json (3)*/

  productos.forEach(producto => { /* 1)Muestra los productos en la página (1)*/
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p>Cuerdas: ${producto.cuerdas}</p>
                          <p>$${producto.precio}</p>
                      </div>
                      <div class="center-align">
                        <a class="btn light blue waves-effect waves-light container" id=boton${producto.id}>Comprar</a>
                      </div>
                     `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`); /* 2) Crea el botón para comprar (1)*/
    boton.addEventListener('click', () => {
      validarProductoRepetido(producto.id); /* 3) crea la funcion para validar si el producto esta repetido (1)*/
      /*6) Esta función valida si se repite un producto y acutaliza su precio o lo agrega si no se encuentra (1)*/
    })
    boton.addEventListener('click', () =>{
      Toastify({
        text: "Se agregó "+producto.nombre+" al carrito",
        duration: 3000,
        gravity: "bottom",
        className: "alerta-toastify"
      }).showToast();
    })
  });
};

export {mostrarProductos};