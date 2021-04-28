import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {MediaProvider} from "./hooks/media_queries";

const breakpoints = {
  smallPhone: "(max-width: 320px)",
  phone: "(max-width: 600px)",
  tablet: "(max-width: 1024px)"
};

ReactDOM.render(
  <React.StrictMode>
    <MediaProvider breakpoints={breakpoints}>
      <App />
    </MediaProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
