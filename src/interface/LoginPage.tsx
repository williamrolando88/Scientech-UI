import { LoadingButton } from '@mui/lab';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <main className="flex h-screen w-screen items-center justify-center bg-slate-500">
        <form className="w-4/5 rounded-lg bg-slate-50 p-10 lg:w-[500px]">
          <h1 className="text-center">Iniciar Sesión</h1>

          <div className="relative mt-6">
            <input
              type="email"
              id="email"
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

          <div className="relative mt-6">
            <input
              type="password"
              id="password"
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
              <input type="checkbox" name="show-password" id="show-password" />
            </div>
          </div>

          <div className="mt-6">
            <LoadingButton
              type="submit"
              variant="contained"
              color="success"
              endIcon={<LoginIcon />}
              loadingPosition="end"
              loading={true}
            >
              Ingresar
            </LoadingButton>
          </div>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
