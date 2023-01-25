import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const PAGES = [
    {
      path: '/',
      label: 'Profile'
    },
    {
      path: '/Teachers',
      label: 'Teachers'
    },
    {
      path: '/Students',
      label: 'Students'
    },
    {
      path: '/Recruiter',
      label: 'Recruiters'
    },
    // {
    //   path: '/',
    //   label: 'Notification'
    // },
  ];

const DrawerComp = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const sideBarHandler = () => {
    setToggleSideBar(!toggleSideBar);
  };

  const drawerHandler = () => {
    setToggleSideBar(false);
  };

  return (
    <React.Fragment>
        <Drawer 
            open={toggleSideBar}
            onClose={drawerHandler}
        >
            <List>
                {
                    PAGES.map((page, index) => (
                        <ListItemButton key={index} onClick={drawerHandler}>
                            <ListItemIcon>
                                <ListItemText>
                                    <NavLink to={page.path} key={index} style={{ textDecoration: 'none'}}>
                                        {page.label}
                                    </NavLink>
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                }
            </List>
        </Drawer>
        <IconButton 
            onClick={sideBarHandler} 
            sx={{marginLeft: "auto", 
                color:'#F39223',
                '&:hover': { backgroundColor: '#F39223', color: '#fff'}
            }} 
                variant="outlined"
        >
            <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp