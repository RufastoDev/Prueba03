// boton de enviar
const newsletter = document.querySelector('#alertSubmit');
// email

document.querySelector('#alertSubmit').addEventListener('click',function(){
    const email_input = document.querySelector('#email_space');
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(emailRegex.test(email_input.value)){
        swal('Suscrito','Estaremos en contacto','success');
    }
    else{
        swal('No suscrito','Ingresa un correo válido','error');
    }
})


