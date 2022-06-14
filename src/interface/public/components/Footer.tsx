import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white flex flex-col items-center divide-y-2">
      <div className="grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto my-6 md:divide-x-2 gap-4">
        <div className="md:pl-4">
          <h4 className="font-semibold md:text-lg my-1">Visitenos:</h4>
          <p className="text-sm md:text-base">
            Cuero y Caicedo Oe3-158 y Av. America <br />
            Quito, Ecuador
          </p>
        </div>
        <div className="md:pl-4">
          <h4 className="font-semibold md:text-lg my-1">Contactos:</h4>
          <p className="text-sm md:text-base">
            022213564 <br /> ventas@scientech-ec.com
          </p>
        </div>
        <div className="md:pl-4">
          <h4 className="font-semibold md:text-lg my-1">
            Horario de atencion:
          </h4>
          <p className="text-sm md:text-base">
            Lunes a viernes <br /> 9:00 a 18:00
          </p>
        </div>
      </div>
      <div className="text-right px-[10%] w-full py-4 text-sm">
        &copy; 2022 Scientech Ecuador. Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
