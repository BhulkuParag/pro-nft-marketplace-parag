import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchTrendingDataRequest,
  fetchTrendingDataSuccess,
  fetchTrendingDataFailure,
} from './homeSlice';
import { fetchTrendingData } from '../../api/home';

function* handleFetchTrendingData() {
  try {
    const users: ReturnType<any> = yield call(fetchTrendingData);
    yield put(fetchTrendingDataSuccess(users));
  } catch (error: any) {
    yield put(
      fetchTrendingDataFailure(error.message ?? 'Something went wrong')
    );
  }
}
export function* homeSaga() {
  yield takeLatest(fetchTrendingDataRequest.type, handleFetchTrendingData);
}
