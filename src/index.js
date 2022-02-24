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

// rerenderEntryTree(); 
// уже не нужно, connect сам делает свой умный subscribe
//  mapStateToProps запускается всякий раз, когда происходят изменения 
//  формируется новый объект и сравниваниется со старым объектом

// store.subscribe(() => {
//   rerenderEntryTree();
// });

// store.subscribe();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
