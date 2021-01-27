import { applyMiddleware, createStore } from 'redux';
import reducers from './root-reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-sagas';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Store
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// Run saga
sagaMiddleware.run(rootSaga);

export default store;