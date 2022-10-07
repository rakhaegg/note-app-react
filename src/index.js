import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';

import { BrowserRouter } from 'react-router-dom';
import AppWrapper from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>
);

