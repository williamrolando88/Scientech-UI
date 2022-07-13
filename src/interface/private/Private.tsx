import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PrivateNavbar from './components/PrivateNavbar';
import Dashboard from './Dashboard';

interface PrivateProps {
  isLogged: boolean;
}

const Private = ({ isLogged }: PrivateProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate('../login', { replace: true });
  }, []);

  return (
    <>
      <PrivateNavbar />
      <Dashboard />
    </>
  );
};

export default Private;
