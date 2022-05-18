import { Box, SelectChangeEvent } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Loading from "components/Common/Loading";
import { Product } from "models";
import React, { useEffect } from "react";
import ProductFilter from "../components/ProductFilter";
import {
  productActions,
  selectProductFilter,
  selectProductList,
  selectProductLoading,
} from "../ProductSlice";

function ListPage() {
  const productList = useAppSelector(selectProductList);
  const loading = useAppSelector(selectProductLoading);
  const filter = useAppSelector(selectProductFilter);

  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(
      productActions.setFilter({
        ...filter,
        sort: event.target.value,
      })
    );
  };

  useEffect(() => {
    dispatch(productActions.fetchProductList(filter));
  }, [dispatch, filter]);

  return (
    <Box className="list-page">
      <Typography variant="h4">Product List</Typography>

      <ProductFilter filter={filter} onChange={handleChange} />
      <Box className="list-page__box">
        <ul>
          {productList && productList.length > 0
            ? productList.map((val: Product, index: number) => (
                <li key={val.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={val.image}
                      alt={val.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {val.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        className="category"
                      >
                        Category: {val.category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {val.description}
                      </Typography>

                      <Box className="prices">
                        <Typography
                          variant="body1"
                          component="span"
                          className="prices__price"
                        >
                          Prices: {val.price}$
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </li>
              ))
            : null}
        </ul>
      </Box>

      {loading ? <Loading /> : null}
    </Box>
  );
}

export default ListPage;
