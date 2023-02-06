import React from 'react'
import Box from '@mui/material/Box';
import { Typography, Stack, Grid} from '@mui/material';
import banner from '../../static/images/banner/Pic1.jpg';
import banner2 from '../../static/images/banner/Pic2.jpg';
import CopyrightIcon from '@mui/icons-material/Copyright';

const text1 = 'The following project is in response to the FYP presented by the students of SSUET enrolled in 2019 badge of Software Engineering, focusing on Quality Education, Infrastructure and Innovation of Industry.  Its a platform for faculty and students at Sir Syed University of Engineering & Technology to showcase their information and their progress made throughout their career as well as their technical and academic skills, achievements and accolades. The project focuses on Partnership for Goals, bridging the gaps between industry and students by providing a platform to state and specify the academic data, technical skills, extracurricular activities and other related information and by getting industry recruiters on board which would help with the issue of recruitment and student searching for various purposes through use of various available filters and assist in potential employment opportunities. '

const text = "The project is under development and still has a long way to go but we hope to present upon a product that facilitates the students and recruiters all around the world in finding new opportunities and making the most out of it. We are passionate and dedicated to making this a successful endeavour. ";

const text2 = "Developed by students Samia Syed, Ali Haider, Huzaifa Ahmed & Muhammad Waleed under the supervision of Engr. Noman Ali Khan, the project aims to provide the progress made by the student throughout their whole academic tenure, the experience and qualifications as well as make announcements regarding the events and occasions concerning in and around the university." 



const AboutUs = () => {
  return (
    <Grid>
      <Grid item xs={12}>
        
          <Box
            sx={{
              width: '100%',
              height: '120px',
              backgroundColor: '#F39223',
            }}
          >
            <Stack direction='column'>
              <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#fff', textAlign: 'center', paddingTop: '20px' }}>Progress Monitoring & Tracking system with Academy-Industry Linkage Support</Typography>
              <Typography variant='p' sx={{ color: '#fff', textAlign: 'center', paddingTop: '5px', textDecoration: 'underline' }}>Write some description</Typography>
            </Stack>
          </Box>

          {/* Left Side Picture */}

          <Box
            sx={{
              width: '100%',
              height: '350px',
              backgroundColor: '#fff',
              paddingTop: '10px'
            }}
          >
            <Stack direction='row'>
              <Grid container>
                <Grid item xs={6}>
                    <Stack direction='column'>
                      <Box sx={{
                        paddingTop: '22px',
                        paddingLeft: '15%',

                      }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>About Our Project</Typography>
                        <Typography variant='subtitle2' sx={{ textAlign: 'justify', marginTop: '15px' }}>{text1}</Typography>
                      </Box>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Box xs={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '25px'
                    }}> 
                          <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 'height': '100%'}}>
                            <img src={banner.toString()} alt="your image" style={{ height: 300, paddingTop: '22px' }} />
                          </Box>
                    </Box>
                </Grid>
              </Grid>
            </Stack>
          </Box>

          {/* Right Side Picture */}

          <Box
            sx={{
              width: '100%',
              height: '350px',
              backgroundColor: '#EEDDFF',
              paddingTop: '10px'
            }}
          >
            <Stack direction='row'>
              <Grid container>
                <Grid item xs={6}>
                    <Box xs={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '25px'
                    }}> 
                          <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 'height': '100%'}}>
                            <img src={banner2.toString()} alt="your image" style={{ height: 300, paddingTop: '22px' }} />
                          </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction='column'>
                      <Box sx={{
                        paddingTop: '22px',
                        paddingRight: '15%'

                      }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>About Team</Typography>
                        <Typography variant='subtitle2' sx={{ textAlign: 'justify', marginTop: '15px' }}>{text2}</Typography>
                        <Typography variant='subtitle2' sx={{ textAlign: 'justify', marginTop: '15px' }}>{text}</Typography>
                      </Box>
                    </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Box>

          {/* Left Side Picture */}

          {/* <Box
            sx={{
              width: '100%',
              height: '350px',
              backgroundColor: '#EEDDFF',
              paddingTop: '10px'
            }}
          >
            <Stack direction='row'>
              <Grid container>
                <Grid item xs={6}>
                    <Box xs={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '25px'
                    }}> 
                          <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 'height': '100%'}}>
                            <img src={banner.toString()} alt="your image" style={{ height: 300, paddingTop: '22px' }} />
                          </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Stack direction='column'>
                      <Box sx={{
                        paddingTop: '22px',
                        paddingRight: '15%'

                      }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Heading 1</Typography>
                        <Typography variant='subtitle2' sx={{ textAlign: 'justify', marginTop: '15px' }}>{text}</Typography>
                      </Box>
                    </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Box> */}

          {/* Right Side Picture */}

          {/* <Box
            sx={{
              width: '100%',
              height: '350px',
              backgroundColor: '#fff',
              paddingTop: '10px'
            }}
          >
            <Stack direction='row'>
              <Grid container>
                <Grid item xs={6}>
                    <Stack direction='column'>
                      <Box sx={{
                        paddingTop: '22px',
                        paddingLeft: '15%',

                      }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Heading 2</Typography>
                        <Typography variant='subtitle2' sx={{ textAlign: 'justify', marginTop: '15px' }}>{text}</Typography>
                      </Box>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Box xs={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: '25px'
                    }}> 
                          <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 'height': '100%'}}>
                            <img src={banner.toString()} alt="your image" style={{ height: 300, paddingTop: '22px' }} />
                          </Box>
                    </Box>
                </Grid>
              </Grid>
            </Stack>
          </Box> */}

          {/* <Box
            sx={{
              width: '100%',
              height: 'auto',
              backgroundColor: '#EEDDFF',
              paddingBottom: '50px',
            }}
          >
            <Stack direction='column'>
              <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#000', textAlign: 'center', paddingTop: '20px' }}>Some heading?</Typography>
              <Box sx={{
                  width: '60%',
                  height: 'auto',
                  backgroundColor: '#fff',
                  margin: 'auto',
                  marginTop: '20px',
                  padding: '20px 20px 20px 20px',
              }}>
                <Typography variant='subtitle2' sx={{ textAlign: 'justify' }}>{text}</Typography>
              </Box>
            </Stack>
          </Box> */}

          {/* Footer */}

          <Box
            sx={{
              width: '100%',
              height: '60px',
              backgroundColor: '#153E52',
            }}
          >
            <Stack direction='column' sx={{ paddingTop: 2.5 }}>
              <Grid container>
                <Grid item xs={4}>
                  <Typography variant='title' sx={{ color: '#fff', textAlign: 'center', paddingLeft: 5 }}>Terms & Conditions</Typography>
                  
                </Grid>
                <Grid item xs={4}>
                  <Typography variant='title' sx={{ color: '#fff', textAlign: 'center', justifyContent: 'center', display: 'flex' }}>Developed By XYZ</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Stack direction='row' sx={{ justifyContent: 'flex-end' }}>
                    {/* Want to put these two thing to right corner of page */}
                     
                    <Typography variant='title' sx={{ color: '#fff', textAlign: 'center', marginLeft: 'auto'}}>Copyrights</Typography>
                    <CopyrightIcon sx={{ color: '#fff', paddingRight: '60px', paddingLeft: '5px' }} />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Box>

        </Grid>
      </Grid>
  )
}

export default AboutUs