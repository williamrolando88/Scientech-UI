import React from 'react';
import ProductsCarousel from '../components/ProductsCarousel';
import MarqueComponent from '../components/MarqueComponent';
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';

const Home = () => {
  return (
    <>
      <ProductsCarousel />

      <section>
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

      <section className="flex flex-col md:flex-row gap-6 justify-between my-10 w-4/5 m-auto">
        <div className="flex-1">
          <Card variant="outlined">
            <CardMedia
              component="img"
              height="200"
              image="https://picsum.photos/300/200?random=1"
              alt="random picture"
            />
            <CardHeader title="Insumos industriales" />
            <CardContent>Compramos muchas cosas</CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card variant="elevation">
            <CardMedia
              component="img"
              height="200"
              image="https://picsum.photos/300/200?random=2"
              alt="random picture"
            />
            <CardHeader title="Maquinaria y repuestos" />
            <CardContent>
              Tambien compramos maquinas... muy grandes y peques
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://picsum.photos/300/200?random=3"
              alt="random picture"
            />
            <CardHeader title="Automatizacion industrial" />
            <CardContent>
              Se dise~a y se instala esas cositas electronicas
            </CardContent>
          </Card>
        </div>
      </section>

      <MarqueComponent />
    </>
  );
};

export default Home;
