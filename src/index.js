import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// document.addEventListener('DOMContentLoaded', function () {
//   window.addEventListener('scroll', function () {
//     if (window.scrollY > 100) {
//       document.body.classList.remove('homeBackground');
//       document.body.classList.add('homeBackgroundTwo');
//       document.body.style.backgroundAttachment = 'fixed';
//       // add padding top to show content behind navbar
//     } else {
//       document.body.classList.remove('homeBackgroundTwo');
//       document.body.classList.add('homeBackground');
//       document.body.style.backgroundAttachment = 'scroll';
//     }
//   });
// });
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
