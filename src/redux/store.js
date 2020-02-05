import {createStore} from 'redux';

const reducer = require('./reducers');

const store = createStore(reducer);

export default store;