import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './interface/LoginPage';
import Dashboard from './interface/private/Dashboard';
import Private from './interface/private/Private';
import Contact from './interface/public/pages/Contact';
import Home from './interface/public/pages/Home';
import Public from './interface/public/Public';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Public />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
        <Route path="dashboard" element={<Private />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
