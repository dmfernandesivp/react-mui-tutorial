import { TextField } from "@mui/material";
import React from "react";

const CoinTableSearchField: React.FC = () => {
  return (
    <TextField
      label="Search for a cryptocurrency"
      variant="outlined"
      sx={{ width: { lg: "50rem", xl: "60rem" }, pb: 2, mt: 4 }}
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default CoinTableSearchField;
