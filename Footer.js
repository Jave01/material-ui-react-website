import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const pages = ['Home', 'Services', 'Portfolio', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ bgcolor: 'rgb(85, 85, 234)', color: 'white', pb: 2 }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: 'rgb(85, 85, 234)', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'center' }}>
            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ color: 'white', fontSize: '16px' }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Social Icons (Inside Background Color) */}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <IconButton href="#" sx={{ color: 'white', mx: 1 }}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="#" sx={{ color: 'white', mx: 1 }}>
          <TwitterIcon />
        </IconButton>
        <IconButton href="#" sx={{ color: 'white', mx: 1 }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="#" sx={{ color: 'white', mx: 1 }}>
          <LinkedInIcon />
        </IconButton>
      </Box>

      {/* Copyright Text (Inside Background Color) */}
      <Typography variant="body2" align="center" sx={{ mt: 1, color: 'white' }}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
}

export default ResponsiveAppBar;
