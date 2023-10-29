import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import CurrencyPicker from "./CurrencyPicker";

type TitleBarProps = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
};

const TitleBar: React.FC<TitleBarProps> = ({ currency, setCurrency }) => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Crypto Tracker</Typography>
          <CurrencyPicker currency={currency} setCurrency={setCurrency} />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
