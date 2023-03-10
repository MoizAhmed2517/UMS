import React, {useState} from 'react';
import { Box, Paper, Typography, Stack, Grid, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Image from '../static/images/banner/profileBanner.jpg';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { styled } from '@mui/material';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import TeacherModel from './TeacherModel';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  color: '#153E52',
  borderColor: '#153E52',
  '&:hover': {
    backgroundColor: '#d9e6f2',
    borderColor: '#153E52',
  },
}))

const experience = [
  {
    org: 'Sir Syed University',
    year: '1998'
  }
]

const InfoCard = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Paper sx={{padding: "5px", borderRadius: '10px', height: '380px'}} elevation={6}>
      
      <Box sx={{
        backgroundImage: `url(${Image})`,
        flex: '2',
        p: '10px',
        height: '150px',
        borderRadius: '10px',
      }}/>

      <Box sx={{
        bgcolor: 'white',
        flex: '2',
        p: '10px',
        height: '150px',
      }}>
          <Stack direction='row'>
            <Avatar 
            sx={{
              width: 150,
              height: 150,
              marginTop: "-120px",
              marginX: "10px",
              border: "3px solid white",
              bgcolor: '#d9e6f2',
            }}
            alt="Remy Sharp">
            </Avatar>

            <Avatar sx={{
              bgcolor: "#fff",
              '&:hover': { backgroundColor: '#d9e6f2' },
              marginLeft: 'auto',
            }}>
              {
                props.displayStatus !== 'search' && (
                  <Button variant="text" onClick={handleOpenModal}>
                    <CreateOutlinedIcon sx={{ height: 25, width: 25, color: '#153E52' }} />
                  </Button>
                )
              }
              
              <TeacherModel openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} name={props.name} desc={props.desc} talk={props.talks} pNum={props.pNum} loc={props.location} />
            </Avatar>
            
          </Stack>

          <Grid container spacing={1} marginTop='3px'>

            <Grid item xs={8}>
              <Box sx={{
                marginLeft: '15px',
              }}>
                
                <Stack direction='column'>
                  <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{props.name}</Typography>
                  <Typography variant='title' sx={{ color: 'gray' }}>{props.desc}</Typography>
                  <Typography variant='title' sx={{ color: 'gray', fontSize: 13, marginTop: 1 }}>Talks about: {props.talks}  </Typography>
                  <Typography variant='p' sx={{ color: 'gray', fontSize: 12, marginTop: 1 }}>{props.pNum}</Typography>
                  <Typography variant='p' sx={{ color: 'gray', fontSize: 12 }}>{props.location}</Typography>
                </Stack>

              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box sx={{
                  marginTop: '12px',
                }}>
                  <Stack direction='row' spacing={2}  marginTop={2}>
                    <Avatar sx={{
                      height: 35,
                      width: 35,
                      bgcolor: '#153E52',
                    }}>
                      <StoreOutlinedIcon/>
                    </Avatar>
                    <Typography variant="title" >{props.org.slice(0, 25)}</Typography>
                  </Stack>

                  <Stack direction='row' spacing={2}>
                    <Typography variant='p' sx={{ color: 'gray', fontSize: 12, marginTop: '-15px', marginLeft: '50px' }} >Working Since:
                      <Typography variant='p' sx={{ color: '#153E52', fontSize: 12, marginTop: '-15px', marginLeft: '5px', textDecoration: 'underline'}}>{props.year}</Typography>
                    </Typography>
                </Stack>
              </Box>
            </Grid>

          </Grid>
      </Box>

    </Paper>
  );
}

export default InfoCard