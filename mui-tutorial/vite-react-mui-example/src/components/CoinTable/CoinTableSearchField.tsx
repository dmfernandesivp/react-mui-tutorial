import { TextField } from "@mui/material";
import React from "react";

type TextSearchFieldProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const CoinTableSearchField: React.FC<TextSearchFieldProps> = ({
  searchText,
  setSearchText,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchText(e.target.value);
  };
  return (
    <TextField
      label="Search for a cryptocurrency"
      variant="outlined"
      sx={{ width: "100%", pb: 2, mt: 4 }}
      onChange={handleChange}
      value={searchText}
    />
  );
};

export default CoinTableSearchField;
