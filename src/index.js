import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import router from './router'


ReactDOM.render(
    <BrowserRouter>
        {router}
    </BrowserRouter>
    , document.getElementById('root'));
