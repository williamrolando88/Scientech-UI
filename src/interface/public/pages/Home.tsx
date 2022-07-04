import ProductsCarousel from '../components/ProductsCarousel';
import MarqueComponent from '../components/MarqueComponent';
import WorkCard from '../components/WorkCard';
import { carouselData } from '../../../modules/carouselData';
import { servicios } from '../../../modules/StaticData';
import Brands from '../components/Brands';

const Home = () => {
  return (
    <>
      <section className="my-10 px-[0%]">
        <ProductsCarousel carouselData={carouselData} />
      </section>

      <section className="mx-auto my-10 w-4/5">
        <h2>Scientech</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          tenetur cum dolorum aut, exercitationem placeat itaque dignissimos
          quod est vel blanditiis, provident amet, nesciunt quisquam autem
          voluptatibus eos. Natus laboriosam provident aut officia eveniet esse
          quasi, odit eligendi ex quod pariatur incidunt. Obcaecati quis earum
          hic in fuga, ea at. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Facere autem cupiditate nulla quasi laborum
          inventore soluta eligendi ea aspernatur deleniti.
        </p>
      </section>

      <section className="m-auto my-10 grid w-4/5 grid-cols-1 justify-between gap-6 md:grid-cols-3">
        {servicios.map((service, i) => (
          <WorkCard content={service} key={i} />
        ))}
      </section>

      <section className="py-6">
        <MarqueComponent>
          <img
            src="./pictures/logosClientes/arca_continental_logo.png"
            alt="Logo-Arca-Continental"
            className="w-40"
          />
          <img
            src="./pictures/logosClientes/motor1_logo.png"
            alt="Logo-Motor1"
            className="w-40"
          />
          <img
            src="./pictures/logosClientes/novacero_logo.png"
            alt="Logo-Novacero"
            className="w-40"
          />
          <img
            src="./pictures/logosClientes/santa_maria_logo.png"
            alt="Logo-Santa-Maria"
            className="w-40"
          />
          <img
            src="./pictures/logosClientes/thoughtworks_logo.png"
            alt="Logo-ThoughtWorks"
            className="w-40"
          />
        </MarqueComponent>
      </section>

      <section className="mx-auto my-10 w-4/5">
        <Brands title="Estas son las marcas con las que trabajamos">
          <img src="https://picsum.photos/150/50?random=20" alt="" />
          <img src="https://picsum.photos/120/70?random=21" alt="" />
          <img src="https://picsum.photos/100/80?random=22" alt="" />
          <img src="https://picsum.photos/150/100?random=23" alt="" />
          <img src="https://picsum.photos/150/150?random=24" alt="" />
          <img src="https://picsum.photos/100/100?random=25" alt="" />
        </Brands>
      </section>
    </>
  );
};

export default Home;
