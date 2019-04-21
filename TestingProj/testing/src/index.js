import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import Reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';

const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(Reducers, {}, composeEnhancer(applyMiddleware(reduxThunk)))

ReactDOM.render(
    <Provider store = {Store}>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
        
    </Provider>,
    document.getElementById('root')
);