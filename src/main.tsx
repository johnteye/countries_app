import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import { Provider } from 'react-redux'
import { store } from './redux/store'


const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    
        <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    
  );
}
