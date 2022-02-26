import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';


reactDom.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
