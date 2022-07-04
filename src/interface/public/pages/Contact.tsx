import { Phone, PhoneIphone } from '@mui/icons-material';
import { Paper } from '@mui/material';
import ContactForm from '../components/ContactForm';

// const imgUrl = new URL('./src/pictures/bg-contact.jpg', import.meta.url).href;

/*
const imgUrl = new URL('./img.png', import.meta.url).href

document.getElementById('hero-img').src = imgUrl
*/

const Contact = () => {
  return (
    <>
      <section
        className={`mt-6 flex h-60 bg-[url('./assets/img/bg-contact.jpg')] bg-cover bg-center bg-no-repeat md:h-72`}
      ></section>

      <section className="mx-auto my-10 w-4/5">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Paper
            elevation={2}
            className="flex flex-col items-center gap-6 py-6"
          >
            <img
              className="h-32"
              src="./pictures/icons/Contacto.png"
              alt="contacto-logo"
            />
            <h5 className="font-bold">Llámanos a nuestros teléfonos:</h5>
            <div>
              <p>
                <span>
                  <Phone />
                </span>
                (02) 515 9441 - Atención al cliente
              </p>
              <p>
                <span>
                  <PhoneIphone />
                </span>
                098 326 0442 - Ventas
              </p>
              <p>
                <span>
                  <PhoneIphone />
                </span>
                099 730 1590 - Proyectos
              </p>
            </div>
          </Paper>
          <Paper
            elevation={2}
            className="flex flex-col items-center gap-6 py-6"
          >
            <img
              className="h-32"
              src="./pictures/icons/Horario.png"
              alt="horario-logo"
            />
            <h5 className="font-bold">Nuestro horario de atención:</h5>
            <div className="text-center">
              <p>Lunes a Viernes</p>
              <p>9:00 - 17:00</p>
            </div>
          </Paper>
          <Paper
            elevation={2}
            className="flex flex-col items-center gap-6 py-6"
          >
            <img
              className="h-32"
              src="./pictures/icons/Ubicacion.png"
              alt="ubicacion-logo"
            />
            <h5 className="font-bold">Nuestra dirección:</h5>
            <div className="text-center">
              <p>Cuero y Caicedo Oe3-158, Av. América</p>
              <p>Quito, Ecuador</p>
            </div>
          </Paper>
        </div>
      </section>

      <section className="mx-auto w-4/5 bg-gray-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.4490901777832!2d-78.49704267077671!3d-0.19009635889386542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b3bf40677c1%3A0x76ab80457df81b09!2sScientech!5e0!3m2!1sen!2sec!4v1655486204010!5m2!1sen!2sec"
          className="h-96 w-full  shadow-md"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="mx-auto my-10 w-4/5">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
