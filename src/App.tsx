import { Box } from "@mui/material";
import Frontend from "components/Layout/Frontend";
import NotFound from "components/NotFound";
import Products from "features/Products";
import React, { Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import "scss/app.scss";

function App() {
  return (
    <Box className="vietkentech">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Redirect exact from="/" to="/list" />
          <Route path="/list" component={Frontend} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Box>
  );
}

export default App;
