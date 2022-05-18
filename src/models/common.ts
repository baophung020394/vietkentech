export interface ListResponse<T> {
  data: T[];
}

export interface PaginationParams {
  limit?: number;
  page?: number;
  totalRows?: number;
}

export interface ListParams {
  limit?: number | 10;
  sort?: string;
  [key: string]: any;
}