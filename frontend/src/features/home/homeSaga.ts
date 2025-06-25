import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  fetchTrendingDataRequest,
  fetchTrendingDataSuccess,
  fetchTrendingDataFailure,
} from './homeSlice';
import { fetchTrendingData } from '../../api/home';
import type { RowData } from '../../types/table';
import type { RootState } from '../../app/store';

function* handleFetchTrendingData() {
  try {
    const period: string = yield select((state: RootState) => state.home.time);
    const sortBy: string = yield select(
      (state: RootState) => state.home.volume_sales
    );
    const data: RowData[] = yield call(fetchTrendingData, period, sortBy);
    yield put(fetchTrendingDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchTrendingDataFailure(error.message ?? 'Something went wrong')
    );
  }
}
export function* homeSaga() {
  yield takeLatest(fetchTrendingDataRequest.type, handleFetchTrendingData);
}
