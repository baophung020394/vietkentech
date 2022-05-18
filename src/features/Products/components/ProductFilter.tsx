import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ListParams } from "models/common";

export interface ProductFilter {
  filter: ListParams;
  onChange: (value: any) => void;
}

function ProductFilter({ filter, onChange }: ProductFilter) {
  return (
    <FormControl style={{ padding: 16, marginTop: 16 }}>
      <InputLabel id="demo-simple-select-label">Price</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filter.sort}
        label="Age"
        onChange={onChange}
      >
        <MenuItem value="desc">DESC</MenuItem>
        <MenuItem value="asc">ASC</MenuItem>
      </Select>
    </FormControl>
  );
}

export default ProductFilter;
