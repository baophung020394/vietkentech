import { Box } from "@mui/material";
import React from "react";
import "./loading.scss";
import { ReactComponent as Logo } from "assets/images/logo/logomoa.svg";

function Loading() {
  return (
    <Box className="loading">
      <Box className="loading__box">
        <Logo />
        <Box className="loading__box--layer"></Box>
      </Box>
    </Box>
  );
}

export default Loading;
