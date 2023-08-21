import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ContexData from './context/ContextData';
import "./style.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContexData>
        <App />
      </ContexData>
    </Router>
  </React.StrictMode>
);

