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
    picture: string;
  };
}

const ProductsCarousel = () => {
  return (
    <Carousel swipe animation="slide">
      {carouselData.map((product, i) => (
        <Slide key={i} product={product} />
      ))}
    </Carousel>
  );
};

export default ProductsCarousel;

const Slide = ({
  product: { title, description, target, picture },
}: SlideProps) => {
  return (
    <Paper elevation={0}>
      <div className="grid grid-cols-2 h-80 content-center">
        <img className="m-auto" src={picture} alt="product picture" />
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
