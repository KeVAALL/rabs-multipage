import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import MainContainer from "./MainContainer";
import NavLogo from "../images/rabs_connect_logo.png";
import { mediumDown, smallDown } from "../styles";

const drawerWidth = 240;
const navItems = ["", "two"];

export default function MainNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const mdDown = mediumDown();
  const smDown = smallDown();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RABS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        mb: smDown ? 20 : mdDown ? 10 : 20,
      }}
    >
      <CssBaseline />

      <AppBar component="nav" sx={{ backgroundColor: "#fff", p: 1 }}>
        <MainContainer>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
            >
              <MenuIcon
                sx={{
                  backgroundImage:
                    "linear-gradient(to bottom, #d81dbf, #d519c4, #d115c9, #cd12cf, #c811d4, #c40dd9, #c00bdd, #bc09e2, #b704e8, #b202ed, #ad01f3, #a602f9)",
                }}
              />
            </IconButton>

            {smDown && (
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <img
                  src={NavLogo}
                  style={{
                    height: "40px",
                    width: "120px",
                  }}
                />
              </Box>
            )}

            <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
              <img
                src={NavLogo}
                style={{
                  height: "50px",
                  width: "140px",
                }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Link
                  key="one"
                  to=""
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Typography sx={{ fontSize: "18px" }}>ONE</Typography>
                </Link>

                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px" }}>
                      {item.toUpperCase()}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </MainContainer>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
          <Toolbar></Toolbar>
        </Drawer>
      </Box>
    </Box>
  );
}
