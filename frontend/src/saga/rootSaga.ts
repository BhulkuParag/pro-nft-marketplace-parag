import { all } from 'redux-saga/effects';
import { homeSaga } from '../features/home/homeSaga';
import { collectionSaga } from '../features/collection/collectionSaga';

export default function* rootSaga() {
  yield all([homeSaga(), collectionSaga()]);
}
