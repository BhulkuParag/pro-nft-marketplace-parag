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
  fetchAiValuationLoadDataSuccess,
  fetchAiValuationLoadDataFailure,
  fetchAiValuationLoadDataRequest,
  fetchStandoutSaleDataSuccess,
  fetchStandoutSaleDataFailure,
  fetchStandoutSaleDataRequest,
  fetchStandoutListingDataSuccess,
  fetchStandoutListingDataFailure,
  fetchStandoutListingDataRequest,
  fetchStandoutTransferDataSuccess,
  fetchStandoutTransferDataFailure,
  fetchStandoutTransferDataRequest,
  fetchStandoutHoldersDataSuccess,
  fetchStandoutHoldersDataFailure,
  fetchStandoutHoldersDataRequest,
  fetchTraitsDataSuccess,
  fetchTraitsDataFailure,
  fetchTraitsDataRequest,
} from './collectionSlice';
import {
  fetchItemDetailData,
  fetchItemsData,
  fetchActivityData,
  fetchOverviewDetailData,
  fetchAiValuationLoadData,
  fetchStandoutData,
  fetchStandoutHoldersData,
  fetchTraitsDataData,
} from '../../api/collection';
import type { RootState } from '../../app/store';
import type { PayloadAction } from '@reduxjs/toolkit';

function* handleFetchItemsData() {
  try {
    const { contract, limit, sortBy } = yield select(
      (state: RootState) => state.collection
    );
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchItemsData> = yield call(
      fetchItemsData,
      limit,
      sortBy,
      contract,
      chainId
    );
    yield put(fetchItemsDataSuccess(data));
  } catch (error: any) {
    yield put(fetchItemsDataFailure(error.message ?? 'Something went wrong'));
  }
}

function* handleFetchItemsDetailData(action: PayloadAction<string>) {
  const token = action.payload;
  try {
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const sortBy: string = yield select(
      (state: RootState) => state.collection.sortBy
    );
    const data: SagaReturnType<typeof fetchItemDetailData> = yield call(
      fetchItemDetailData,
      token,
      sortBy,
      chainId
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
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const { selectedActivityFilter, sortBy, includeMetadata } = yield select(
      (state: RootState) => state.collection
    );
    const data: SagaReturnType<typeof fetchActivityData> = yield call(
      fetchActivityData,
      includeMetadata,
      Object.values(selectedActivityFilter),
      sortBy,
      chainId
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
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const contract: string = yield select(
      (state: RootState) => state.collection.contract
    );
    const data: SagaReturnType<typeof fetchOverviewDetailData> = yield call(
      fetchOverviewDetailData,
      contract,
      chainId
    );
    yield put(fetchOverviewDetailDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchOverviewDetailDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleAiValuationLoadData() {
  try {
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchAiValuationLoadData> = yield call(
      fetchAiValuationLoadData,
      chainId
    );
    yield put(fetchAiValuationLoadDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchAiValuationLoadDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleStandoutSaleData(
  action: PayloadAction<{ contract: string; type: string }>
) {
  try {
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchStandoutData> = yield call(
      fetchStandoutData,
      action.payload.contract,
      action.payload.type,
      chainId
    );
    yield put(fetchStandoutSaleDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchStandoutSaleDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleStandoutListingData(
  action: PayloadAction<{ contract: string; type: string }>
) {
  try {
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchStandoutData> = yield call(
      fetchStandoutData,
      action.payload.contract,
      action.payload.type,
      chainId
    );
    yield put(fetchStandoutListingDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchStandoutListingDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleStandoutTransferData(
  action: PayloadAction<{ contract: string; type: string }>
) {
  try {
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchStandoutData> = yield call(
      fetchStandoutData,
      action.payload.contract,
      action.payload.type,
      chainId
    );
    yield put(fetchStandoutTransferDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchStandoutTransferDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleStandoutHoldersData(
  action: PayloadAction<{ contract: string; type: string }>
) {
  try {
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchStandoutHoldersData> = yield call(
      fetchStandoutHoldersData,
      action.payload.contract,
      action.payload.type,
      '7d',
      chainId
    );
    yield put(fetchStandoutHoldersDataSuccess(data));
  } catch (error: any) {
    yield put(
      fetchStandoutHoldersDataFailure(error.message ?? 'Something went wrong')
    );
  }
}

function* handleTraitsDataData() {
  try {
    const chainId: string = yield select(
      (state: RootState) => state.home.chainId
    );
    const data: SagaReturnType<typeof fetchTraitsDataData> = yield call(
      fetchTraitsDataData,
      chainId
    );
    yield put(fetchTraitsDataSuccess(data));
  } catch (error: any) {
    yield put(fetchTraitsDataFailure(error.message ?? 'Something went wrong'));
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
  yield takeLatest(
    fetchAiValuationLoadDataRequest.type,
    handleAiValuationLoadData
  );
  yield takeLatest(fetchStandoutSaleDataRequest.type, handleStandoutSaleData);
  yield takeLatest(
    fetchStandoutListingDataRequest.type,
    handleStandoutListingData
  );
  yield takeLatest(
    fetchStandoutTransferDataRequest.type,
    handleStandoutTransferData
  );
  yield takeLatest(
    fetchStandoutHoldersDataRequest.type,
    handleStandoutHoldersData
  );
  yield takeLatest(fetchTraitsDataRequest.type, handleTraitsDataData);
}
