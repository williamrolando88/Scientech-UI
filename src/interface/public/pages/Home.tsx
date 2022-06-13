import React from 'react';
import ProductsCarousel from '../components/ProductsCarousel';
import MarqueComponent from '../components/MarqueComponent';
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import WorkCard from '../components/WorkCard';
import { servicios } from '../../../modules/StaticData';

const Home = () => {
  return (
    <>
      <section className="px-[0%] my-10">
        <ProductsCarousel />
      </section>

      <section className="w-4/5 mx-auto my-10">
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between my-10 w-4/5 m-auto">
        {servicios.map((service, i) => (
          <WorkCard content={service} key={i} />
        ))}
      </section>

      <MarqueComponent />
    </>
  );
};

export default Home;
