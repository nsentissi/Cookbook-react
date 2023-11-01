import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Routes, Route, NavLink } from "react-router-dom";


const drawerWidth = 240;
const navItems = [  
            <NavLink 
            to="/"
            style={({ isActive }) => ({ 
            color: isActive ? "white" : "white",
            backgroundColor: isActive ? "#19a7d2" : "#1976D2",
            borderRadius: isActive ? "5px" : "5px",
            padding: isActive ? "2px 10px" : "10px",
            textDecoration: isActive ? "none" : "none"

              })}
            >Home</NavLink>,
            <NavLink 
              to="/useContentfulMain"
              style={({ isActive }) => ({ 
                color: isActive ? "white" : "white",
                backgroundColor: isActive ? "#19a7d2" : "#1976D2", 
                borderRadius: isActive ? "5px" : "5px",
                padding: isActive ? "2px 10px" : "10px",
                textDecoration: isActive ? "none" : "none"

                })}
            >Main Dishes</NavLink>,
            <NavLink 
            to="/useContentfulDesserts"
            style={({ isActive }) => ({ 
              color: isActive ? "white" : "white",
              backgroundColor: isActive ? "#19a7d2" : "#1976D2",
              borderRadius: isActive ? "5px" : "5px",
              padding: isActive ? "2px 10px" : "10px",
              textDecoration: isActive ? "none" : "none"

              })}
          >Desserts</NavLink>,
          <NavLink 
          to="/useContentfulCocktails"
          style={({ isActive }) => ({ 
            color: isActive ? "white" : "white",
            backgroundColor: isActive ? "#19a7d2" : "#1976D2",
            borderRadius: isActive ? "5px" : "5px",
            padding: isActive ? "2px 10px" : "10px",
            textDecoration: isActive ? "none" : "none"

            })}
        >Cocktails</NavLink>,


];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    
  );
}



export default Navbar;