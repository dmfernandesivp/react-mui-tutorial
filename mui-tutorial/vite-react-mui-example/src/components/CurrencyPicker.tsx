import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import useAppState from "../context/useContext";

const CurrencyPicker: React.FC = () => {
  const { currency, setCurrency } = useAppState();
  const currencyArray = ["USD", "EUR", "INR"];

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
  };
  return (
    <FormControl sx={{ width: "120px", color: "white" }} size="small">
      <InputLabel sx={{ color: "white" }}>Currency</InputLabel>
      <Select
        value={currency}
        label="Currency"
        sx={{ color: "white" }}
        onChange={handleChange}
      >
        {currencyArray.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencyPicker;
