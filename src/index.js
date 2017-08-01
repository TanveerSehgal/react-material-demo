import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './routes';
import './favicon.ico';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <AppRoutes/>,
  document.getElementById('app')
);