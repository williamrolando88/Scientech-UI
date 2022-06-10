import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { carouselData } from '../../../modules/mockData';

interface SlideProps {
  product: {
    title: string;
    description: string;
    target: string;
  };
}

const ProductsCarousel = () => {
  return (
    <Carousel>
      {carouselData.map((product, i) => (
        <Slide key={i} product={product} />
      ))}
    </Carousel>
  );
};

export default ProductsCarousel;

const Slide = ({ product: { title, description, target } }: SlideProps) => {
  return (
    <Paper>
      <div className="grid grid-cols-2">
        <img src="#" alt="product picture" />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button>
            <Link to={target}>Ver mas</Link>
          </Button>
        </div>
      </div>
    </Paper>
  );
};
