import React from 'react'
import Box from '@mui/material/Box';
import { Typography, Stack, Grid} from '@mui/material';
import banner from '../../static/images/banner/about-us-1.jpg';
import CopyrightIcon from '@mui/icons-material/Copyright';

const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

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
              <Typography variant='h4' sx={{ fontWeight: 'bold', color: '#fff', textAlign: 'center', paddingTop: '20px' }}>About Us</Typography>
              <Typography variant='p' sx={{ color: '#fff', textAlign: 'center', paddingTop: '5px', textDecoration: 'underline' }}>Lorerum Ipsum write some tagline</Typography>
            </Stack>
          </Box>

          {/* Left Side Picture */}

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
          </Box>

          {/* Right Side Picture */}

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
          </Box>

          {/* Left Side Picture */}

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
          </Box>

          {/* Right Side Picture */}

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
          </Box>

          <Box
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
          </Box>

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