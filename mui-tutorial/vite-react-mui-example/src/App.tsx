import { Box } from "@mui/material";
import TitleBar from "./components/TitleBar";
import LeftMenu from "./components/LeftMenu";
import { Outlet } from "react-router";

function App() {
  return (
    <Box>
      <TitleBar />
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <LeftMenu />
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
