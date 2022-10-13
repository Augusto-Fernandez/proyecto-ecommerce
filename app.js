import {validarProductoRepetido} from "./src/accionesCarrito.js";

const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p>Cuerdas: ${producto.cuerdas}</p>
                          <p>${producto.precio}</p>
                      </div>
                      <div>
                        <a class="btn-floating light blue waves-effect waves-light" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                     `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      validarProductoRepetido(producto.id);
    })
  });
};

export {mostrarProductos};