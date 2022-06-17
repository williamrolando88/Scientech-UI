import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('myyovajy');

  return (
    <div>
      {state.succeeded ? (
        'Gracias por contactarnos, en breve un representante se comunicara contigo'
      ) : (
        <form action="submit" onSubmit={handleSubmit}>
          <h3>
            Dejanos llegar a ti, deja tus datos y nos contactaremos contigo lo
            mas pronto posible
          </h3>

          <label htmlFor="nombre">
            Nombre y Apellido:<i>*</i>
          </label>
          <br />
          <input id="nombre" name="nombre" type="text" required />
          <ValidationError
            prefix="Nombre"
            field="nombre"
            errors={state.errors}
          />
          <br />

          <label htmlFor="correo">
            Correo electronico:
            <i>*</i>
          </label>
          <br />
          <input id="correo" name="correo" type="email" required />
          <ValidationError
            prefix="Correo"
            field="correo"
            errors={state.errors}
          />
          <br />

          <label htmlFor="telefono">
            Teléfono:
            <i>*</i>
          </label>
          <br />
          <input
            id="telefono"
            name="telefono"
            type="tel"
            pattern="[0-9]{9,10}"
            required
          />
          <ValidationError
            prefix="Telefono"
            field="telefono"
            errors={state.errors}
          />
          <br />

          <label htmlFor="mensaje">
            Tienes alguna pregunta, comentario o sugerencia?
          </label>
          <br />
          <textarea name="mensaje" id="mensaje"></textarea>
          <br />

          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
          <br />

          <i>* Información requerida</i>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
