import { Box } from "@mui/material";
import Products from "features/Products";
import React from "react";
import "./Layout.scss";

function Frontend() {
  return (
    <Box className="layout">
      <Box className="layout__box">
        <Box className="layout__box--main">
          <Products />
        </Box>
      </Box>
    </Box>
  );
}

export default Frontend;
