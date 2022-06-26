import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Private = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const logedUser = false;
    if (!logedUser) navigate('../login', { replace: true });
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Private;
