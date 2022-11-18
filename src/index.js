import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

import About from './components/about/About';
import Cv from './components/CV/CV.js';
import Portfolio from './components/Portfolio/Portfolio'
import Contactform from './components/ContactForm/ContactForm'
// import Mailer from './components/Mailer/Mailer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cv />
    <Portfolio />
    <About />
    <Contactform />
    {/* <Mailer/> */}
  </React.StrictMode>
);

reportWebVitals();
