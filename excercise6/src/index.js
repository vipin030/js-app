import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import { getCompanies, getLocations } from './actions'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [];
const store = createStore(reducer, applyMiddleware(...middleware));
store.dispatch(getCompanies());
store.dispatch(getLocations())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
