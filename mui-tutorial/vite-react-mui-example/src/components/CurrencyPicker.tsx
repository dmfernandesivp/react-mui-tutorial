import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type CurrencyPickerProps = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
};

const CurrencyPicker: React.FC<CurrencyPickerProps> = ({
  currency,
  setCurrency,
}) => {
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
