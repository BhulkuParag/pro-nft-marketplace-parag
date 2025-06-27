import {
  call,
  put,
  select,
  takeLatest,
  type SagaReturnType,
} from 'redux-saga/effects';
import {
  fetchItemsDataRequest,
  fetchItemsDataSuccess,
  fetchItemsDataFailure,
  fetchItemDetailsDataFailure,
  fetchItemDetailsDataSuccess,
  fetchItemDetailsDataRequest,
} from './collectionSlice';
import { fetchItemDetailData, fetchItemsData } from '../../api/collection';
import type { RootState } from '../../app/store';
import { useParams } from 'react-router-dom';
import type { PayloadAction } from '@reduxjs/toolkit';

function* handleFetchItemsData() {
  try {
    const { collection, limit, sortBy } = yield select(
      (state: RootState) => state.collection
    );
    const data: SagaReturnType<typeof fetchItemsData> = yield call(
      fetchItemsData,
      limit,
      sortBy,
      collection
    );
    yield put(fetchItemsDataSuccess(data));
  } catch (error: any) {
    yield put(fetchItemsDataFailure(error.message ?? 'Something went wrong'));
  }
}

function* handleFetchItemsDetailData(action: PayloadAction<string>) {
  const token = action.payload;
  try {
    const { sortBy } = yield select((state: RootState) => state.collection);
    const data: SagaReturnType<typeof fetchItemDetailData> = yield call(
      fetchItemDetailData,
      token,
      sortBy
    );
    yield put(fetchItemDetailsDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchItemDetailsDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

export function* collectionSaga() {
  yield takeLatest(fetchItemsDataRequest.type, handleFetchItemsData);
  yield takeLatest(
    fetchItemDetailsDataRequest.type,
    handleFetchItemsDetailData
  );
}
