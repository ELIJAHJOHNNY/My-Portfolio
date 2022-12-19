import React, { useEffect } from "react";
// import logo1 from "../assets/logo1.ico";
// import CardMedia from "@mui/material/CardMedia";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    name: "Home",
    idName: "#home",
  },
  {
    id: 2,
    name: "About",
    idName: "#about",
  },
  {
    id: 3,
    name: "Skills",
    idName: "#skills",
  },
  {
    id: 4,
    name: "Works",
    idName: "#works",
  },
  {
    id: 5,
    name: "Contact",
    idName: "#contact",
  },
];

function Navbar(props) {
  useEffect(() => {
    const ac = new AbortController();
    document.title = "ELIJAH JOHNNY";
    return function cleanup() {
      ac.abort();
    };
  }, []);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, cursor: "pointer" }}>
        PORTFOLIO
      </Typography>
      <Divider />
      <List className="font-perm">
        {navItems.map(item => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", fontFamily: "Segoe UI" }}
            >
              <ListItemText primary={item.name} className="font-perm" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        color="secondary"
        component="nav"
        sx={{ bgcolor: "white", opacity: "95%" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#7600bc" }}
          >
            <MenuIcon />
          </IconButton>
          {/* <CardMedia
            component="img"
            image={logo1}
            alt="logo"
            sx={{
              width: "50px",
              height: "50px",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
          /> */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#7600bc",
              fontFamily: "Permanent Marker",
              cursor: "pointer",
            }}
          >
            PORTFOLIO
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(item => (
              // <Link to={item.idName}>{item.name}</Link>
              <Button
                key={item.id}
                sx={{
                  color: "#7600bc",
                  fontFamily: "Raleway",
                  textTransform: "none",
                  fontSize: "12px",
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          {/* bg-[#F1F7F7] */}
          <button className="bg-[#7600bc] ml-2 font-[Raleway] py-2 px-3 rounded-[4px] text-[12px] font-[700] tracking-wide ">
            RESUME
          </button>
        </Toolbar>
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
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
