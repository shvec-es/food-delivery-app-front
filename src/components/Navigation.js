import * as React from "react";
import { Breadcrumbs, AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{ height: "50px", padding: "10px 20px", mb: "20px" }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="|"
        sx={{ color: "white" }}
      >
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/cart">Shopping Cart</NavLink>
      </Breadcrumbs>
    </AppBar>
  );
};

export default Navigation;
