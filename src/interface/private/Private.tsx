import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Token from '../../modules/tokenClass';
import { setUser } from '../../store/reducers/user';
import PrivateNavbar from './components/PrivateNavbar';
import Dashboard from './Dashboard';

const Private = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const session = new Token();
    const loggedStatus = session.isValid();
    const userInfo = session.loadToken();

    dispatch(setUser(userInfo));
    if (!loggedStatus) navigate('../login', { replace: true });
  }, []);

  return (
    <>
      <PrivateNavbar />
      <Dashboard />
    </>
  );
};

export default Private;
