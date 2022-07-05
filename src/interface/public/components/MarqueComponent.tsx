import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueComponent = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="m-auto w-full md:w-4/5">
      <Marquee>
        {React.Children.map(children, (child, i) => (
          <PictureWrapper key={i}>
            {React.cloneElement(child, { children }, null)}
          </PictureWrapper>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueComponent;

const PictureWrapper = ({ children }: { children: JSX.Element }) => {
  return <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20">{children}</div>;
};
