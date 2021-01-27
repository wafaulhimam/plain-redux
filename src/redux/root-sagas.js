import { all } from 'redux-saga/effects';

import contributorSaga from './contributor/sagas';

export default function* rootSaga() {
    yield all([
        contributorSaga(),
        // counterSaga()
    ])
}