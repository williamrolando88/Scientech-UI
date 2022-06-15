import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './interface/public/pages/Contact';
import Home from './interface/public/pages/Home';
import Public from './interface/public/Public';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
