import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './routes';
import './favicon.ico';

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize';

render(
  <AppRoutes/>,
  document.getElementById('app')
);