import React from "react";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FC<React.PropsWithChildren> = () => (
  <Container disableGutters={true}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Dynamic Dashboard App
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ mx: "auto" }}>
          Dashboard
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/form-editor"
          sx={{ mx: "auto" }}
        >
          Form Editor
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/json-editor"
          sx={{ mx: "auto" }}
        >
          JSON Editor
        </Button>
      </Toolbar>
    </AppBar>

    <Container disableGutters={true}>
      <Outlet />
    </Container>
  </Container>
);
