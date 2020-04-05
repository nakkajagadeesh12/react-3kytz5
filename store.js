import { createStore, applyMiddleware } from 'redux';
import storeReducer from './reducer';
import rootsaga from './saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(storeReducer, applyMiddleware(sagaMiddleware));
store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())));
sagaMiddleware.run(rootsaga);

export default store;