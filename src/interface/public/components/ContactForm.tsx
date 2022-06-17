import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@mui/material';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('myyovajy');

  return (
    <div>
      {state.succeeded ? (
        'Gracias por contactarnos, en breve un representante se comunicara contigo'
      ) : (
        <form
          className="flex flex-col items-center gap-10 md:flex-row"
          action="submit"
          onSubmit={handleSubmit}
        >
          <div className="flex-1">
            <h3 className="py-10 text-center text-2xl font-bold md:text-left">
              Déjanos llegar a tí, llena tus datos y nos contactaremos contigo
              lo más pronto posible
            </h3>
          </div>

          <div className="flex w-full flex-1 flex-col items-start gap-1 ">
            <label htmlFor="nombre">
              Nombre y Apellido:<i className="font-bold text-red-500">*</i>
            </label>
            <input
              className="mb-2 w-full rounded-sm border px-2 py-1 shadow-sm focus:ring-2 md:w-1/2"
              id="nombre"
              name="nombre"
              type="text"
              required
            />
            <ValidationError
              prefix="Nombre"
              field="nombre"
              errors={state.errors}
            />

            <label htmlFor="correo">
              Correo electronico:
              <i className="font-bold text-red-500">*</i>
            </label>
            <input
              className="mb-2 w-full rounded-sm border px-2 py-1 shadow-sm focus:ring-2 md:w-1/2"
              id="correo"
              name="correo"
              type="email"
              required
            />
            <ValidationError
              prefix="Correo"
              field="correo"
              errors={state.errors}
            />

            <label htmlFor="telefono">
              Teléfono:
              <i className="font-bold text-red-500">*</i>
            </label>
            <input
              className="mb-2 w-full rounded-sm border px-2 py-1 shadow-sm focus:ring-2 md:w-1/2"
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

            <label htmlFor="mensaje">
              Tienes alguna pregunta, comentario o sugerencia?
            </label>
            <textarea
              className=" h-32 w-full rounded-sm border px-2 py-1 shadow-sm focus:ring-2 md:w-1/2"
              name="mensaje"
              id="mensaje"
            ></textarea>
            <i className="mb-2 text-sm">* Información requerida</i>

            <Button
              variant="outlined"
              type="submit"
              disabled={state.submitting}
            >
              Enviar
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
