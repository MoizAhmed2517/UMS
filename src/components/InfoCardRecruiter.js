import React, {useState} from 'react';
import { Box, Paper, Typography, Stack, Grid, Button, IconButton, Tooltip} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Image from '../static/images/banner/1.png';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material';
import ModalRecruiter from './ModalRecruiter';
import CallMadeIcon from '@mui/icons-material/CallMade';

function createData( id, name, designation, lookfor, pnum, location, LinkedIn, github, email, org, orgYear, orgDesc, orgWeb, skills  ) {
  return { id, name, designation, lookfor, pnum, location, LinkedIn, github, email, org, orgYear, orgDesc, orgWeb, skills };
}

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  color: '#153E52',
  borderColor: '#153E52',
  '&:hover': {
    backgroundColor: '#d9e6f2',
    borderColor: '#153E52',
  },
}))

const style = {
    bgcolor: 'rgba(135,206,235, 0.1)',
    border: '1px solid rgba(4,30,66, 0.3)',
    height: '100%',
    boxShadow: 2,
    p: 0.7,
    borderRadius: '1px',
    marginTop: '15px',
    width: '100%',
    borderRadius: '10px',
  };

const InfoCardRecruiter = (props) => {
  const rows = [
    createData(
    props.recruiterId, 
    props.name, 
    props.position, 
    props.lookingFor, 
    props.contact, 
    props.location, 
    props.linkedin, 
    props.github, 
    props.email, 
    props.orgName, 
    props.working, 
    props.orgDescription, 
    props.orgWeb, 
    props.skills)
  ]


  const [openEdit, setOpenEdit] = useState(false);
  const [selectRow, setSelectedRow] = useState(rows);
  const handleOpenModalEdit = (row) => {
    setOpenEdit(true);
    setSelectedRow(row);
  }
  const handleCloseModalEdit = () => setOpenEdit(false);

  const handleGithub = (e, link) => {
    window.open(link, '_blank');
  }

  const handleMail = (e, mail) => {
    const email = "mailto: " + mail;
    window.location.href = email;
  }

  const handleLinkedIn = (e, link) => {
    console.log("LinkedIn")
    window.open(link, '_blank');
  }

  const handleOrgSite = () => {
    window.open(props.orgWeb, '_blank');
  }

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
              <Button variant="text" onClick={() => handleOpenModalEdit(rows)} sx={{ marginTop: 1 }}>
                <CreateOutlinedIcon sx={{ height: 25, width: 25, color: '#153E52', marginTop: -1 }} />
              </Button>
              <ModalRecruiter openModal={openEdit} handleClose={handleCloseModalEdit} setOpenState={setOpenEdit} skill={selectRow} id={props.userId}/>
            </Avatar>
            
          </Stack>

          <Grid container spacing={1} marginTop='3px'>

            <Grid item xs={8}>
              {rows.map((data, index) => (
                    <Box key={index + data.id}
                      sx={{
                        marginLeft: '15px',
                      }}>
                      <Stack direction='column'>
                        <Stack direction='row' spacing={2}>
                          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{data.name}</Typography>
                        </Stack>
    
                        <Typography variant='title' sx={{ color: 'gray' }}>{`Desingation: ${data.designation}`}</Typography>
                        <Typography variant='title' sx={{ color: 'gray', fontSize: 13, marginTop: 1 }}>Looking for: {data.lookfor} </Typography>
                        <Typography variant='p' sx={{ color: 'gray', fontSize: 12, marginTop: 1 }}>{data.pnum}</Typography>
                        <Typography variant='p' sx={{ color: 'gray', fontSize: 12 }}>{data.location}</Typography>
                      </Stack>

                      <Stack direction='row' spacing={1} marginTop='10px'>

                        <Tooltip title={data.LinkedIn}>
                          <IconButton  sx={{ color: '#153E52', height: 25, width: 25 }} onChange={(e) => handleLinkedIn(data.LinkedIn)}>
                            <LinkedInIcon/>
                          </IconButton>
                        </Tooltip>

                        <Tooltip title={data.email}>
                          <IconButton  sx={{ color: '#153E52', height: 25, width: 25 }} onChange={(e) => handleMail(data.email)}>
                            <MailIcon/>
                          </IconButton>
                        </Tooltip>

                        <Tooltip title={data.github}>
                          <IconButton  sx={{ color: '#153E52', height: 25, width: 25 }} onChange={(e) => handleGithub(data.github)}>
                            <GitHubIcon/>
                          </IconButton>
                        </Tooltip>

                      </Stack>
                    </Box>
                ))
              }

                
            </Grid>

            <Grid item xs={4}>
              <Box sx={{
                  marginTop: '12px',
                }}>

                  {
                    rows.map((text, index) => (
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
                            <Typography variant='p' sx={{ color: '#153E52', fontSize: 12, marginTop: '-15px', marginLeft: '5px', textDecoration: 'underline'}}>{text.orgYear}</Typography>
                          </Typography>
                        </Stack>

                        <Stack direction='row'>
                          <Box sx={style}>
                            <Typography variant='p' sx={{ color: 'gray', fontSize: 12}}>{text.orgDesc}</Typography>
                            <Button variant='text' sx={{ marginLeft: '3px', fontSize: 12}} onChange={handleOrgSite}>
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