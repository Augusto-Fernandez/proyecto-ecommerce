const formulario = document.getElementById("formulario");
const numeroTarjeta = document.getElementById("numero-tarjeta");
const codigo = document.getElementById("codigo");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const localidad = document.getElementById("localidad");
const direccion = document.getElementById("direccion");
const codigoPostal = document.getElementById("codigo-postal");
const telefono = document.getElementById("telefono");
const submit = document.getElementById("submit");

/*
const formulario = document.getElementById("formulario");
const errorNumeroTarjeta = document.getElementById("error-numero-tarjeta");
const errorCodigo = document.getElementById("error-codigo");
const errorNombre = document.getElementById("error-nombre");
const errorApellido = document.getElementById("error-apellido");
const errorLocalidad = document.getElementById("error-localidad");
const errorDireccion = document.getElementById("error-direccion");
const errorCodigoPostal = document.getElementById("error-codigo-postal");
const errorTelefono = document.getElementById("error-telefono");
const errorSubmit = document.getElementById("error-submit");
 */

formulario.addEventListener('submit', (e) => {
    let errores = 0;
    
    /* Error Numero Tarjeta */
    if(!numeroTarjeta.value.match(/^[0-9]{16}$/)){
        const errorNumeroTarjeta = document.getElementById("error-numero-tarjeta");
        errorNumeroTarjeta.innerHTML="Este campo debe contener 16 dígitos y solamente números"
        errores++
    }

    /* Error codigo seguridad */
    if(!codigo.value.match(/^[0-9]{3}$/)){
        const errorCodigo = document.getElementById("error-codigo");
        errorCodigo.innerHTML="Este campo debe contener 3 dígitos y solamente números"
        errores++
    }

    /* Error nombre */
    if(nombre.value === '' || nombre.value == null || !nombre.value.match(/^[A-Za-z]/)){
        const errorNombre = document.getElementById("error-nombre");
        errorNombre.innerHTML="Este campo es obligatorio"
        errores++
    }

    /* Error apellido */
    if(apellido.value === '' || apellido.value == null || !apellido.value.match(/^[A-Za-z]/)){
        const errorApellido = document.getElementById("error-apellido");
        errorApellido.innerHTML="Este campo es obligatorio"
        errores++
    }

    /* Error Localidad */
    if(localidad.value === '' || localidad.value == null || !localidad.value.match(/^[A-Za-z0-9]/)){
        const errorLocalidad = document.getElementById("error-localidad");
        errorLocalidad.innerHTML="Este campo es obligatorio"
        errores++
    }

    /* Error Dirección*/
    if(direccion.value === '' || direccion.value == null || !direccion.value.match(/^[A-Za-z0-9]/)){
        const errorDireccion = document.getElementById("error-direccion");
        errorDireccion.innerHTML="Este campo es obligatorio"
        errores++
    }

    /* Error Codigo postal */
    if(!codigoPostal.value.match(/^[0-9]{4}$/)){
        const errorCodigoPostal = document.getElementById("error-codigo-postal");
        errorCodigoPostal.innerHTML="Este campo debe contener 4 dígitos y solamente números"
        errores++
    }
    /* Error telefono */
    
    if(!telefono.value.match(/^[0-9]{10}$/)){
        const errorTelefono = document.getElementById("error-telefono");
        errorTelefono.innerHTML="Este campo debe contener 10 dígitos y solamente números"
        errores++    
    }
    if(errores>0){
        e.preventDefault();
        const errorSubmit = document.getElementById("error-submit");
        errorSubmit.innerHTML="Por favor corrija el formulario"
    }
})

