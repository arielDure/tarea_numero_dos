const FORM_COMPONENT = {
    ELEMENTS: {
        FORM_STATUS: document.querySelector('#form-status'),
        FORM_IN: document.querySelector('#formulario-registro'),
        RESPUESTA: document.querySelector('#respuesta')
    }
}

FORM_COMPONENT.ELEMENTS.FORM_IN.addEventListener(
    'submit',
    handleSubmitForm
)

function handleSubmitForm(event) {

    event.preventDefault()

    const years = event.target.edad.value
    const name = event.target.nombre.value
    const form_status = {
        ok: true,
        message: 'Formulario Enviado'
    }

    if (years >= 18) {

        const message =
            `
          <div>
             
             <h2>Bienvenido  ${name}, tienes acceso al evento.</h2>
             
          </div>
          `
        FORM_COMPONENT.ELEMENTS.RESPUESTA.classList.add('success')
        FORM_COMPONENT.ELEMENTS.RESPUESTA.classList.remove('error')
        FORM_COMPONENT.ELEMENTS.RESPUESTA.innerHTML = message

    } else {

        const message =
            `
          <div>
             
             <h2>Lo sentimos,  ${name}, debes ser mayor de edad.</h2>
             
          </div>
          `
        FORM_COMPONENT.ELEMENTS.RESPUESTA.classList.add('error')
        FORM_COMPONENT.ELEMENTS.RESPUESTA.classList.remove('success')
        FORM_COMPONENT.ELEMENTS.RESPUESTA.innerHTML = message

    }
    FORM_COMPONENT.ELEMENTS.FORM_STATUS.innerText = form_status.message

}

