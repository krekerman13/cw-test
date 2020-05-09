import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import usersSaga from './features/users/sagas';
import userReducer from './features/users/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  users: userReducer,
});

function* rootSaga() {
  yield all([usersSaga()]);
}

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
