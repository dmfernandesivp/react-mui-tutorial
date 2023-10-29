import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import PageContent from "./PageContent";

const PageNotFound = () => {
  return (
    <PageContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Card variant="outlined">
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              color="error"
              sx={{ fontSize: "6rem", marginBottom: 2 }}
            >
              404
            </Typography>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              Page Not Found
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
              Sorry, the page you are looking for does not exist.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button component={Link} to="/" variant="contained" color="primary">
              Go Home
            </Button>
          </CardActions>
        </Card>
      </Box>
    </PageContent>
  );
};

export default PageNotFound;
