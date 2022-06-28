import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { notExpiredToken, userInfo } from '../../modules/tokenValidation';
import { setUser } from '../../store/reducers/user';

const Private = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('UserID');

    if (token && notExpiredToken(token)) {
      const userData = userInfo(token);
      dispatch(setUser(userData));
    } else navigate('../login', { replace: true });
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Private;
