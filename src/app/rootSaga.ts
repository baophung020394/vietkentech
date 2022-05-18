import productSaga from "features/Products/ProductSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([productSaga()]);
}
