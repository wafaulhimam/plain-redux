import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_DATA_REQUEST } from './actionTypes';
import axios from 'axios';
import { getDataError, getDataSuccess } from './actions';

// Saga worker 
function* getDataWorker() {
    try {
        const response = yield call(axios.get, 'https://reqres.in/api/users?page=2');
        const data = response;
        yield put(getDataSuccess(data));
    } catch (error) {
        yield put(getDataError(error))
    }
}

// combine all saga watcher
export default function* rootSaga() {
    yield takeLatest(GET_DATA_REQUEST, getDataWorker)
}
