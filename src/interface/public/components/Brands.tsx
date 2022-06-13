import React from 'react';

interface BrandsProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Brands = ({ title, children }: BrandsProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <h3 className="flex-1">{title}</h3>
      <div className="flex-1 flex flex-wrap gap-6 items-center">{children}</div>
    </div>
  );
};

export default Brands;
