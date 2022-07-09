import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './interface/LoginPage';
import Private from './interface/private/Private';
import PrivateIndex from './interface/private/components/PrivateIndex';
import Contact from './interface/public/pages/Contact';
import Home from './interface/public/pages/Home';
import Public from './interface/public/Public';
import ImportCalculator from './interface/private/apps/ImportCalculator';
import InvoiceReader from './interface/private/apps/InvoiceReader';

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
          <Route index element={<PrivateIndex />} />
          <Route path="calculadora" element={<ImportCalculator />} />
          <Route path="facturas" element={<InvoiceReader />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
