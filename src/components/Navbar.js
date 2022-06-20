import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
                {pageText: 'About', pageLink: '/About'}, 
                {pageText: 'Projects', pageLink: '/Projects'}, 
                {pageText: 'Contact', pageLink: '/Contact'}
              ]

function Navbar() {

  const [navMenu, setNavMenu] = useState(null);
  
  const handleOpenNavMenu = (event) => {
    setNavMenu(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setNavMenu(null)
  }

  return (
    <div>
      <AppBar position='static' sx={{zindex: 1, backgroundColor: '#18191A'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography 
              variant="h6" noWrap component={Link} to="/"
              sx={{mr:2, display: {xs: 'none', md: 'flex'}, fontFamily: 'monospace', fontWeight: 700, color: 'inherit', textDecoration: 'none',}}>
              Jun Kim
            </Typography>

            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size='large' aria-label='nav menu' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
                  <MenuIcon/>
              </IconButton>
              <Menu id='menu-appbar' anchorEl={navMenu} anchorOrigin={{vertical: 'top', horizontal:'left'}} open={Boolean(navMenu)} onClose={handleCloseNavMenu}
               sx={{display: {xs: 'block', md: 'none'}}}>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center' component={Link} to={page.pageLink}
                      sx={{textDecoration: 'none', color: 'black', fontWeight: 700, fontFamily: 'monospace'}}>{page.pageText}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Typography variant="h5" noWrap component={Link} to="/"
              sx={{mr:2, display: {xs: 'flex', md: 'none'}, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, color: 'inherit', textDecoration: 'none',}}>
                Jun Kim
            </Typography>
            
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'right'}}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} component={Link} to={page.pageLink} sx={{my: 2, color: 'white', display: 'block', fontFamily: 'monospace'}}>
                  {page.pageText}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Navbar