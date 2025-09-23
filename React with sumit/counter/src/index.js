import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <h1>Hello</h1>
    <Hello />
   
  </React.Fragment>
);

reportWebVitals();
