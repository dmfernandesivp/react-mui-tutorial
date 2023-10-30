import { Box, Container } from "@mui/material";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Container sx={{ pt: 8, pl: 4, pr: 4 }} maxWidth={false}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default PageContent;
