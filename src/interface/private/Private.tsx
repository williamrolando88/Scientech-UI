import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { notExpiredToken, userInfo } from '../../modules/tokenValidation';
import { setUser } from '../../store/reducers/user';
import PrivateNavbar from './components/PrivateNavbar';
import Dashboard from './Dashboard';

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
      <PrivateNavbar />
      <Dashboard />
    </>
  );
};

export default Private;
