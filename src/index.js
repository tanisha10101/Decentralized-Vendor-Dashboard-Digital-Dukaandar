import React,{ useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { fileSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './context/ContextProvider'
import './index.css'
ReactDOM .render(
    <ContextProvider>
        <App/>
    </ContextProvider>,
    document.getElementById('root')
);
