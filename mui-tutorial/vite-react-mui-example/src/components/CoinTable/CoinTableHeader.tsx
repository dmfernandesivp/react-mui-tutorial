import { Box, Typography } from "@mui/material";

const CoinTableHeader = () => {
  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <Typography variant="h5">Cryptocurrency Prices by Market Cap</Typography>
    </Box>
  );
};

export default CoinTableHeader;
