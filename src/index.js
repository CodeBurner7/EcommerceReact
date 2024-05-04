

//TT
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { AppProvider } from './context/productcontext';
import { FilterProvider } from './context/filtercontext';
import {CartProvider} from './context/cartcontext';
ReactDOM.render(
  <AppProvider>
    <FilterProvider>
      <CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
  </FilterProvider>
  </AppProvider>,
  document.getElementById('root')
);