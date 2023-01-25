import React, {useState} from 'react';
import { Box, Paper, Typography, Stack, Grid, Button, Icon, IconButton} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Image from '../static/images/banner/1.png';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/material';
import TeacherModel from './TeacherModel';
import CallMadeIcon from '@mui/icons-material/CallMade';

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

const socialProfiles = [
    <LinkedInIcon/>,
    <MailIcon/>,
    <GitHubIcon/>,
    <FacebookIcon/>,
]

const style = {
    bgcolor: 'background.paper',
    border: '1px solid #11324',
    height: '80px',
    boxShadow: 1,
    p: 0.7,
    borderRadius: '1px',
    marginTop: '15px',
  };

const InfoCardRecruiter = () => {

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Paper sx={{padding: "5px", borderRadius: '10px', height: '400px'}} elevation={6}>
      
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
              <Button variant="text" onClick={handleOpenModal}>
                <CreateOutlinedIcon sx={{ height: 25, width: 25, color: '#153E52' }} />
              </Button>
              <TeacherModel openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} />
            </Avatar>
            
          </Stack>

          <Grid container spacing={1} marginTop='3px'>

            <Grid item xs={8}>
              <Box sx={{
                marginLeft: '15px',
              }}>
                
                <Stack direction='column'>
                  <Stack direction='row' spacing={2}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Recruiter Name</Typography>
                    
                  </Stack>

                  <Typography variant='title' sx={{ color: 'gray' }}>Recruiter Designation</Typography>
                  <Typography variant='title' sx={{ color: 'gray', fontSize: 13, marginTop: 1 }}>Looking for: Machine Learning Engineer, Backend Engineer </Typography>
                  <Typography variant='p' sx={{ color: 'gray', fontSize: 12, marginTop: 1 }}>+92 335 XXX-XXXX</Typography>
                  <Typography variant='p' sx={{ color: 'gray', fontSize: 12 }}>Karachi, Sindh, Pakistan</Typography>
                </Stack>

                <Stack direction='row' spacing={1} marginTop='10px'>
                    {
                        socialProfiles.map((icons) => (
                                <IconButton key={icons} sx={{ color: '#153E52', height: 25, width: 25 }}>
                                    {icons}
                                </IconButton>
                        ))
                    }
                </Stack>

              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box sx={{
                  marginTop: '12px',
                }}>

                  {
                    experience.map((text, index) => (
                      <React.Fragment key={index}>
                        <Stack direction='row' spacing={2}  marginTop={2}>
                          <Avatar sx={{
                            height: 35,
                            width: 35,
                            bgcolor: '#153E52',
                          }}>
                            <LanguageIcon/>
                          </Avatar>
                          <Typography variant="title" >{text.org}</Typography>
                        </Stack>

                        <Stack direction='row' spacing={2}>
                          <Typography variant='p' sx={{ color: 'gray', fontSize: 12, marginTop: '-15px', marginLeft: '50px' }} >Working Since:
                            <Typography variant='p' sx={{ color: '#153E52', fontSize: 12, marginTop: '-15px', marginLeft: '5px', textDecoration: 'underline'}}>{text.year}</Typography>
                          </Typography>
                        </Stack>

                        <Stack direction='row'>
                          <Box sx={style}>
                            <Typography variant='p' sx={{ color: 'gray', fontSize: 12}}>Loreum ipsum and detail of organization will be displyed in this area over the icons and apply the desired styles to each one. Here is an example of how you might do this</Typography>
                            <Button variant='text' sx={{ marginLeft: '3px', fontSize: 12}}>
                                Visit <CallMadeIcon sx={{ height: 15, width: 15 }}/>
                            </Button>
                          </Box>
                          
                        </Stack>
                    </React.Fragment>
                    ))
                  }

              </Box>
            </Grid>

          </Grid>
      </Box>

    </Paper>
  );
}

export default InfoCardRecruiter