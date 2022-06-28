import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { notExpiredToken } from '../../modules/tokenValidation';

const Private = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('UserID');

    if (token && notExpiredToken(token)) {
      console.log('valid token');
    } else navigate('../login', { replace: true });
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Private;
