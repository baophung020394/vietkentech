import { PayloadAction } from "@reduxjs/toolkit";
import productApi from "apis/productApi";
import { Product } from "models";
import { ListParams, ListResponse } from "models/common";
import { call, debounce, put, takeLatest } from "redux-saga/effects";
import { productActions } from "./ProductSlice";

function* fetchProductList(action: PayloadAction<ListParams>) {
  try {
    const response: Product[] = yield call(productApi.list, action.payload);
    yield put(productActions.fetchProductListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch product list", error);
    yield put(productActions.fetchProductListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(productActions.setFilter(action.payload));
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchProductList, fetchProductList);

  yield debounce(
    500,
    productActions.setFilterWithDebounce.type,
    handleSearchDebounce
  );
}
