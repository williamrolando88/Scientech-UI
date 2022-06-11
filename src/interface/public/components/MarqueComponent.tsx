import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueComponent = () => {
  return (
    <section className="bg-sky-600">
      <div className="w-4/5 h-20 flex items-center m-auto">
        <Marquee speed={50} gradientColor={[2, 132, 199]}>
          <div className="h-20 w-20 bg-gray-600 ml-40">box 1</div>
          <div className="h-20 w-20 bg-gray-600 ml-40">box 2</div>
          <div className="h-20 w-20 bg-gray-600 ml-40">box 3</div>
          <div className="h-20 w-20 bg-gray-600 ml-40">box 4</div>
          <div className="h-20 w-20 bg-gray-600 ml-40">box 5</div>
          <div className="h-20 w-20 bg-gray-600 ml-40">box 6</div>
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueComponent;
