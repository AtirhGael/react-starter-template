import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducers';
import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:reducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(sagas);

export default store;