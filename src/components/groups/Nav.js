import React, {useState, useEffect} from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab, useMediaQuery, useTheme, Tooltip, Menu, Box, MenuItem, IconButton } from '@mui/material';
import { Avatar } from '@mui/material';
import DrawerComp from '../DrawerComp';
import { NavLink, Link } from 'react-router-dom';
import profilePic from '../../static/images/avatar/image.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { bounceIn } from 'react-animations';
import banner from '../../static/images/Logo/logooo.png';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bounceIn: {
    animationName: bounceIn,
    animationDuration: '1s'
  }
});

const settings = [
  {
    path: '/student-profile',
    label: 'Profile'
  },
  {
    path: '/',
    label: 'Logout'
  }
];
const PAGES = [
  // {
  //   path: '/Teacher',
  //   label: 'Profile'
  // },
  {
    path: '/Teachers-search',
    label: 'Teachers'
  },
  {
    path: '/Student-search',
    label: 'Students'
  },
  {
    path: '/Recruiter',
    label: 'Recruiters'
  },
  {
    path: '/AboutUs',
    label: 'About Us'
  },
];

function Nav() {

  const id = 2;

  const [tabColor, setTabColor] = useState(Number(localStorage.getItem('myValue')) || 0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const tabColorHandler = (e,value) => {
    setTabColor(value);
  }

  useEffect(() => {
    localStorage.setItem('myValue', String(tabColor))
  }, [tabColor])

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md')); 

  return (
   <React.Fragment>
      <AppBar position='sticky' sx={{background: '#153E52'}}>
        <Toolbar>
          { isMatch ? (
            <>
              <Typography>
                  LOGO
              </Typography>
              <DrawerComp/>
            </>
          ) : (
            <>
              <LazyLoadImage
                className={css(styles.bounceIn)}
                src={banner}
                width={60}
                height={60}
                alt='image'
              />
              <Tabs 
                sx={{ marginLeft: "auto", textColor: "#fff", textDecoration: 'none' }} 
                textColor= 'inherit'
                value={tabColor} 
                onChange={tabColorHandler} 
                TabIndicatorProps={{ style: { background: "#F39223" } 
              }}>
                {
                  PAGES.map((page, index) => (
                    <Tab key={index} label={page.label} to={page.path} component={NavLink} state={{ user_id: id }} />
                  ))
                }
              </Tabs>

              {/* <Avatar alt="React" src={profilePic} sx={{marginLeft: "auto"}} /> */}
              <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="NO Image" src={profilePic} sx={{marginLeft: "auto"}} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" to={setting.path} component={Link} sx={{ textDecoration: 'none', color: '#153E52' }}>{setting.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              
            </>
          )
        }
        
        </Toolbar>
      </AppBar>
  </React.Fragment> 
  );
}
export default Nav;