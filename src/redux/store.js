import { applyMiddleware, createStore } from 'redux';
import reducers from './root-reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export default store;