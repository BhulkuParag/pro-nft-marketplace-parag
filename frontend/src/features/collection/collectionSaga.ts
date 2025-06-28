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
  fetchActivityDataSuccess,
  fetchActivityDataFailure,
  fetchActivityDataRequest,
  fetchOverviewDetailDataRequest,
  fetchOverviewDetailDataSuccess,
  fetchOverviewDetailDataFailure,
} from './collectionSlice';
import {
  fetchItemDetailData,
  fetchItemsData,
  fetchActivityData,
  fetchOverviewDetailData,
} from '../../api/collection';
import type { RootState } from '../../app/store';
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

function* handleFetchActivityData() {
  try {
    const { type, sortBy, includeMetadata } = yield select(
      (state: RootState) => state.collection
    );
    const data: SagaReturnType<typeof fetchActivityData> = yield call(
      fetchActivityData,
      includeMetadata,
      type,
      sortBy
    );
    yield put(fetchActivityDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchActivityDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleFetchOverviewDetailData() {
  try {
    const { contract } = yield select(
      (state: RootState) => state.collection
    );
    const data: SagaReturnType<typeof fetchOverviewDetailData> = yield call(
      fetchOverviewDetailData,
      contract
    );
    yield put(fetchOverviewDetailDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchOverviewDetailDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

export function* collectionSaga() {
  yield takeLatest(fetchItemsDataRequest.type, handleFetchItemsData);
  yield takeLatest(
    fetchItemDetailsDataRequest.type,
    handleFetchItemsDetailData
  );
  yield takeLatest(
    fetchItemDetailsDataRequest.type,
    handleFetchItemsDetailData
  );
  yield takeLatest(fetchActivityDataRequest.type, handleFetchActivityData);
  yield takeLatest(
    fetchOverviewDetailDataRequest.type,
    handleFetchOverviewDetailData
  );
}
