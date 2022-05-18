import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Product } from "models";
import { ListParams, ListResponse } from "models/common";

export interface ProductState {
  loading: boolean;
  list: Product[];
  filter: ListParams;
}

const initialState: ProductState = {
  loading: false,
  list: [],
  filter: {
    limit: 1000,
    sort: "desc",
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },

    fetchProductListSuccess(state, action: PayloadAction<Product[]>) {
      console.log(action);
      state.list = action.payload;
      state.loading = false;
    },

    fetchProductListFailed(state) {
      state.loading = false;
    },

    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },

    setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
  },
});

// Actions
export const productActions = productSlice.actions;

// Selectors
export const selectProductList = (state: RootState) => state.product.list;
export const selectProductLoading = (state: RootState) => state.product.loading;
export const selectProductFilter = (state: RootState) => state.product.filter;
// Reducer
const productReducer = productSlice.reducer;
export default productReducer;
