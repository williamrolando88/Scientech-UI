import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CarouselObject } from '../../../modules/carouselData';
interface CarouselProps {
  carouselData: CarouselObject[];
}

const ProductsCarousel = ({ carouselData }: CarouselProps) => {
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
}: {
  product: CarouselObject;
}) => {
  return (
    <Paper elevation={0}>
      <div className="grid grid-cols-2 content-center">
        <img
          className="m-auto h-80"
          src={picture}
          alt={title.toLowerCase().split(' ').join('-').concat('-picture')}
        />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          {target && (
            <Button>
              <Link to={target}>Ver mas</Link>
            </Button>
          )}
        </div>
      </div>
    </Paper>
  );
};
