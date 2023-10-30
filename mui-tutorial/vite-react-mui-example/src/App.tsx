import { Box, Grid } from "@mui/material";
import TitleBar from "./components/TitleBar";
import LeftMenu from "./components/LeftMenu";
import { Outlet } from "react-router";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <TitleBar />
      <Box
        sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}
      >
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <LeftMenu />
          </Grid>
          <Grid item xs={10} lg={8}>
            <Outlet />
          </Grid>
          <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
            <LeftMenu />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
