import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const CurrencyPicker: React.FC = () => {
  const currencyArray = ["USD", "EUR", "INR"];
  return (
    <FormControl sx={{ width: "120px", color: "white" }} size="small">
      <InputLabel sx={{ color: "white" }}>Currency</InputLabel>
      <Select label="Currency" sx={{ color: "white" }}>
        {currencyArray.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencyPicker;
