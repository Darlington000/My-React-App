import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

const BRAND = "Logo"; // change to your project name

const pages = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/aboutus" },
  { label: "Services", href: "/services" },
  { label: "Contact us", href: "/contactus" },
];

const userMenu = [
  { label: "Profile", icon: <PersonOutlineIcon fontSize="small" /> },
  { label: "Settings", icon: <SettingsOutlinedIcon fontSize="small" /> },
];

export default function Header({ userName = "R" }) {
  const [active, setActive] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Adds a shadow once the page is scrolled
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });

  const handleNav = (label) => {
    setActive(label);
    setDrawerOpen(false);
  };

  const Brand = (
    <Box
      component="a"
      href="#home"
      onClick={() => handleNav("Home")}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: "#fff",
        textDecoration: "none",
        mr: { md: 4 },
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: 2,
          display: "grid",
          placeItems: "center",
          bgcolor: alpha("#fff", 0.16),
        }}
      >
        <AdbIcon />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
        {BRAND}
      </Typography>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundImage:
            "linear-gradient(90deg, #0d47a1 0%, #1976d2 60%, #29b6f6 100%)",
          boxShadow: scrolled ? "0 6px 24px rgba(13, 71, 161, 0.35)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" }, mr: 1 }}
            >
              <MenuIcon />
            </IconButton>

            {Brand}

            {/* Desktop links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                flexGrow: 1,
              }}
            >
              {pages.map(({ label, href }) => {
                const isActive = active === label;
                return (
                  <Button
                    key={label}
                    href={href}
                    onClick={() => handleNav(label)}
                    sx={{
                      color: "#fff",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      textTransform: "none",
                      fontSize: "0.95rem",
                      fontWeight: isActive ? 600 : 500,
                      opacity: isActive ? 1 : 0.85,
                      position: "relative",
                      "&:hover": { bgcolor: alpha("#fff", 0.12), opacity: 1 },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 16,
                        right: 16,
                        bottom: 4,
                        height: 2,
                        borderRadius: 1,
                        bgcolor: "#fff",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transition: "transform 0.25s ease",
                      },
                    }}
                  >
                    {label}
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

            {/* User avatar + menu */}
            <Tooltip title="Account">
              <IconButton
                onClick={(e) => setAnchorEl(e.currentTarget)}
                aria-label="Open account menu"
                sx={{ p: 0.5, border: `2px solid ${alpha("#fff", 0.5)}` }}
              >
                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: "#fff",
                    color: "primary.main",
                    fontWeight: 700,
                  }}
                >
                  {userName.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              onClick={() => setAnchorEl(null)}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1.5,
                    minWidth: 190,
                    borderRadius: 3,
                    boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                  },
                },
              }}
            >
              {userMenu.map(({ label, icon }) => (
                <MenuItem key={label}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  {label}
                </MenuItem>
              ))}
              <Divider />
              <MenuItem sx={{ color: "error.main" }}>
                <ListItemIcon sx={{ color: "error.main" }}>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Log out
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: { sx: { width: 280, borderRadius: "0 16px 16px 0" } },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            bgcolor: "primary.main",
          }}
        >
          {Brand}
          <IconButton
            color="inherit"
            aria-label="Close navigation menu"
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ p: 1.5 }}>
          {pages.map(({ label, href }) => (
            <ListItemButton
              key={label}
              component="a"
              href={href}
              selected={active === label}
              onClick={() => handleNav(label)}
              sx={{ borderRadius: 2, mb: 0.5 }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontWeight: active === label ? 600 : 500,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
