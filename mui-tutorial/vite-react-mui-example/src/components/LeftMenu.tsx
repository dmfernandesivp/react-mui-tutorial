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

const LeftMenu = () => {
  // Example menu items with icons
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Profile", icon: <AccountCircleIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Paper sx={{ height: "100vh", width: 250, p: 2 }}>
      <List sx={{ pt: 8 }}>
        {menuItems.map((item, index) => (
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
        ))}
      </List>
    </Paper>
  );
};

export default LeftMenu;
