import React from 'react';
import ProductsCarousel from '../components/ProductsCarousel';
import MarqueComponent from '../components/MarqueComponent';
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import WorkCard from '../components/WorkCard';
import { servicios } from '../../../modules/StaticData';
import Brands from '../components/Brands';
import Marquee from 'react-fast-marquee';

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

      <section className="py-6">
        <MarqueComponent>
          <img src="https://picsum.photos/150/50?random=30" alt="" />
          <img src="https://picsum.photos/150/80?random=31" alt="" />
          <img src="https://picsum.photos/100/50?random=32" alt="" />
          <img src="https://picsum.photos/150/50?random=33" alt="" />
          <img src="https://picsum.photos/150/50?random=34" alt="" />
          <img src="https://picsum.photos/150/50?random=35" alt="" />
        </MarqueComponent>
      </section>

      <section className="w-4/5 mx-auto my-10">
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
