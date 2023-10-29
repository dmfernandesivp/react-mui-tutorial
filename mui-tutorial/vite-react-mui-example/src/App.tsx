import { Box } from "@mui/material";
import TitleBar from "./components/TitleBar";
import LeftMenu from "./components/LeftMenu";
import { Outlet } from "react-router";
import { useState } from "react";

function App() {
  const [currency, setCurrency] = useState<string>("");

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TitleBar currency={currency} setCurrency={setCurrency} />
      <Box
        sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}
      >
        <LeftMenu />
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
