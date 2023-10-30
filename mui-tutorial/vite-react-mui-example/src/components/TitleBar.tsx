import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import CurrencyPicker from "./CurrencyPicker";

const TitleBar: React.FC = () => {
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
          <CurrencyPicker />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
