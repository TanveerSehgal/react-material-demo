import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './routes';
import '../node_modules/react-md/dist/react-md.amber-blue.min.css';
import './favicon.ico';

render(
  <AppRoutes/>,
  document.getElementById('app')
);