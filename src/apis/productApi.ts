import { Product } from "models";
import { ListParams, ListResponse } from "models/common";
import axiosClient from "./axiosClient";

/**
 * Get list product
 */
const productApi = {
  list(params: ListParams): Promise<Product> {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
};

export default productApi;
