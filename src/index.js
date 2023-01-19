import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import './scss/null.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/vehicle_observer'>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
