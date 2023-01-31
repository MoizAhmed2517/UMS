import React, { useState } from 'react';
import { Paper, Box, Stack, Typography, Divider, Avatar, Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import profilePic from '../static/images/avatar/image.jpg';
import EndrosementModal from './EndrosementModal';

function createData(name, title, date, endrose) {
    return { name, title, date, endrose };
  }

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
      backgroundColor: '#153E52',
    },
  });


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Endorsment = (props) => {
  const dataR = [];
  const datagiven = [];
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  props.endorsG && props.endorsG.map((data) => {
    datagiven.push(createData(data.receiver_name, data.receiver_profile.slice(0, 110), data.datetime, data.endoresement));
  })

  props.endorsR && props.endorsR.map((data) => {
    dataR.push(createData(data.giver_name, data.giver_profile.slice(0, 110), data.datetime, data.endoresement));
  })



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{padding: "5px", borderRadius: '10px', height: 'auto'}} elevation={8}>
        <Box sx={{
        marginLeft: 2.5,
        marginTop: 1,
      }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Endorsement</Typography>
        </Box>

        <Box sx={{ width: '95%', marginLeft: 2.5, paddingBottom: 2, marginRight: 2 }}>
            <AntTabs 
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
                TabIndicatorProps={{ style: { background: "#F39223" } }}
        >
                <Tab label="Recieved" {...a11yProps(0)} />
                <Tab label="Given" {...a11yProps(1)} />
            </AntTabs>
        

            { value === 0 && (
                <React.Fragment>
                    <Box>
                        {
                            props.displayStatus === "search" && (
                                <Button sx={{ 
                                    width: '100%', 
                                    marginTop: 2, 
                                    backgroundColor: '#153E52', 
                                    '&:hover': { backgroundColor: '#102f3e' } 
                                }} 
                                variant='contained'
                                onClick={handleOpenModal}
                                >
                                    Give Recommendations
                                </Button>
                            )
                        }
                        <EndrosementModal openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} userSearchID={props.userIDSearch}/>

                    {
                        dataR.map((item, index) => (
                            <List key={index} sx={{ marginLeft: 3, marginRight: 2}}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="React" src={profilePic} />
                                    </ListItemAvatar>
                                    <ListItemText primary={<Typography variant="title" sx={{ fontWeight: 'bold', color: '#153E52' }}>{item.name}</Typography>} 
                                    secondary={
                                        <React.Fragment>
                                            <Stack direction="column">
                                                <Typography variant="subtitle2" sx={{ color: '#000' }}>{item.title}</Typography>
                                                <Typography variant="caption">{item.date}</Typography>
                                                <Typography variant="caption">{item.endrose}</Typography>
                                            </Stack>
                                                
                                        </React.Fragment>
                                    } 
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </List>
                        ))
                    }
                    {
                        dataR.length === 0 && <Typography variant='subtitle1' sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>Not Given</Typography>
                    }
                    
                    </Box>
                </React.Fragment>
            )}

        { value === 1 && (
                <React.Fragment>
                    <Box>
                        {
                            datagiven.map((item, index) => (
                                <List key={index} sx={{ marginLeft: 3, marginRight: 2}}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar alt="React" src={profilePic} />
                                        </ListItemAvatar>
                                        <ListItemText primary={
                                            <React.Fragment>
                                                <Stack direction="row">
                                                    <Typography variant="title" sx={{ fontWeight: 'bold', color: '#153E52' }}>{item.name}</Typography>
                                                </Stack>
                                            </React.Fragment>
                                        } 
                                        secondary={
                                            <React.Fragment>
                                                <Stack direction="column">
                                                    <Typography variant="subtitle2" sx={{ color: '#000' }}>{item.title}</Typography>
                                                    <Typography variant="caption">{item.date}</Typography>
                                                    <Typography variant="caption">{item.endrose}</Typography>
                                                </Stack>
                                                    
                                            </React.Fragment>
                                        } 
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                            ))
                        }
                        {
                            datagiven.length === 0 && <Typography variant='subtitle1' sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>Not Given</Typography>
                        }
                    </Box>
                </React.Fragment>
            )}
        </Box>
    </Paper>

  )
}

export default Endorsment