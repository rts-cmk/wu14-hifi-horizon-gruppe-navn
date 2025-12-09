import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from "react-dom/client"; 
import { BrowserRouter, Route } from 'react-router';
import App from './App.jsx'

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </React.StrictMode>
    );