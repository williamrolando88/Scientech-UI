import { LoadingButton } from '@mui/lab';
import LoginIcon from '@mui/icons-material/Login';
import { useEffect, useState } from 'react';
import { useLoginMutation } from '../store/services/scientech';
import { useNavigate } from 'react-router-dom';
import { type } from 'os';

const initialLoginData = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const token = sessionStorage.getItem('UserID');
  const navigate = useNavigate();

  const [loginTrigger, { isSuccess, isLoading, isError, data }] =
    useLoginMutation();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [loginData, setLoginData] = useState(initialLoginData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginTrigger(loginData);
  };

  useEffect(() => {
    if (token) navigate('../dashboard', { replace: true });
  }, []);

  useEffect(() => {
    if (isSuccess) {
      sessionStorage.setItem('UserID', JSON.stringify(data?.token));
      navigate('../dashboard', { replace: true });
    }
  }, [isSuccess]);

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-slate-500">
      <form
        onSubmit={handleSubmit}
        className="flex w-4/5 flex-col gap-6 rounded-lg bg-slate-50 p-10 lg:w-[500px]"
      >
        <h1 className="text-center">Iniciar Sesión</h1>

        <div className="relative ">
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            className="peer w-full border-b-2 py-2 placeholder-transparent focus:border-sky-600 focus:outline-none"
            placeholder="Correo electrónico"
            autoComplete="email"
          />
          <label
            htmlFor="email"
            className="absolute -top-4 left-0 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm"
          >
            Correo electrónico
          </label>
        </div>

        <div className="relative ">
          <input
            type={visiblePassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className="peer w-full border-b-2 py-2 placeholder-transparent focus:border-sky-600 focus:outline-none"
            placeholder="Contraseña"
            autoComplete="current-password"
          />
          <label
            htmlFor="password"
            className="absolute -top-4 left-0 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm"
          >
            Contraseña
          </label>

          <div className="flex items-center gap-2">
            <label htmlFor="show-password">Mostrar contraseña</label>
            <input
              type="checkbox"
              name="show-password"
              id="show-password"
              onChange={() => setVisiblePassword(!visiblePassword)}
            />
          </div>
        </div>

        {isError && (
          <div className=" -mb-6 rounded-t-lg bg-red-300 py-1 text-center text-sm text-red-800 transition-all md:text-base">
            Correo o contraseña incorrectos
          </div>
        )}

        <LoadingButton
          type="submit"
          variant="contained"
          color="success"
          endIcon={<LoginIcon />}
          loadingPosition="end"
          loading={isLoading}
        >
          Ingresar
        </LoadingButton>
      </form>
    </main>
  );
};

export default LoginPage;
