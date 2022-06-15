import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="flex h-60">
        <img
          className="object-cover w-screen"
          src="https://picsum.photos/1500/400?random=30"
          alt=""
        />
      </section>

      <section>
        <h3>Informacion</h3>
        <div className="grid grid-cols-1">
          <div>hola</div>
          <div>direccion</div>
          <div>telefonos</div>
        </div>
      </section>

      <section className="h-60 w-4/5 mx-auto bg-gray-500">
        Aqui va el mapa
      </section>

      <section>formulario de contacto</section>
    </>
  );
};

export default Contact;
