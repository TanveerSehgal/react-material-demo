import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './routes';
import './favicon.ico';

render(
  <AppRoutes/>,
  document.getElementById('app')
);