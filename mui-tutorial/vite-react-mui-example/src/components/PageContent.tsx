import { Box, Container } from "@mui/material";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Container
      sx={{ paddingTop: 8, paddingLeft: 4, paddingRight: 4 }}
      maxWidth={false}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default PageContent;
