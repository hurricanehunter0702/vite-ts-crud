import React from "react";

import { Box, Container } from "@mui/material";

import Header from "./components/Header.tsx";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <Box>
      <Header />
      <Box sx={{bgcolor: 'background.default', minHeight: '100vh'}}>
        <Container>
          {children}
        </Container>
      </Box>
    </Box>
  )
}