import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from './routes';
import App from './app';

//Inject React app into html
ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('app')
);