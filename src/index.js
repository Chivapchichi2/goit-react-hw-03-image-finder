import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

/* eslint no-undef: "error" */
/* eslint-env browser */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
