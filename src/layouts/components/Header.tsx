import { useContext } from "react";

import { AppBar, Button, Toolbar, useTheme, Typography } from "@mui/material";

import { MUIWrapperContext } from "../../App.tsx";

export default function Header() {
  const theme = useTheme();
  const muiUtils = useContext(MUIWrapperContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CRUD
        </Typography>
        <Button variant="contained" onClick={muiUtils.toggleColorMode}>
          {theme.palette.mode === "light"? "Dark Mode" : "Light Mode"}
        </Button>
      </Toolbar>
    </AppBar>
  )
}