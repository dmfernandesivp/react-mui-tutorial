import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  // Example menu items with icons
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Paper sx={{ height: "100vh", width: "100%", pt: 2 }}>
      <List sx={{ pt: 8 }}>
        {menuItems.map((item, index) => (
          <Link
            key={item.text}
            to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                  cursor: "pointer",
                  borderRadius: 2,
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Paper>
  );
};

export default LeftMenu;
