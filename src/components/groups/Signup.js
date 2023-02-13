import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const skills = ['Javascript', 'Python', 'HTML', 'React', 'SEO', 'Machine Learning', 'OOP', 'Cyber Security', 'AWS', 'Java'];

const theme = createTheme();

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

const Signup = (props) => {

    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [files, setFiles] =useState([]);
    const handleChangeSelectUser = (event) => {
    const {
        target: { value },
    } = event;
    setUser(
        typeof value === 'string' ? value.split(',') : value,
    );
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let statusValidation = false;
        const item = {
          name: data.get('firstName') + " " + data.get('lastName'),
          email: data.get('email'),
          org_name: data.get('Comapanyname'),
          position: data.get('Designation'),
          website: data.get('Comapanyweblink'),
          org_description: data.get('ComapanyDescription'),
          linkedin: data.get('LinkedinProfileLink'),
          github: data.get('GithubProfileLink'),
          address: data.get('address'),
          country: data.get('country'),
          city: data.get('city'),
          looking_for: data.get('skill'),
          working_since: data.get('workingSince'),
          contact: data.get('contact'),
        };

        const credentials = {
          username: data.get('firstName') + data.get('lastName'),
          email: data.get('email'),
          password: data.get('password'),
        }

        for (const key in item){
          if (item[key].trim() === ""){
            alert(`The value of "${key}" is empty!`);
            statusValidation = true;
            break;
          }
        }

        if(!statusValidation){
          axios.post('http://18.183.141.57/management/recruiter-create/', item)
            .then(response => {
              if (response.status >= 200 || response.status<=205){
                axios.post('http://18.183.141.57/auth/users/', credentials)
                .then(response => {
                  if (response.status >= 200 || response.status<=205){
                    alert('You have successfully signup.');
                    navigate('/');
                  }
                })
                .catch(err => {
                  alert(`Please check your password or username. Remember username do not have any special characters or spaces.`)
                })
              }
            })
            .catch(error => {
            console.log(error);
          });
        }

      };
    
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" sx={{ backgroundColor:'#fff' }}> 
          <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: '#F39223' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ color: '#F39223' }}>
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3}}>
                <Grid container spacing={2}>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      type="email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="demo-multiple-select">Looking for Skill *</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={user}
                            label="Searching for skil"
                            onChange={handleChangeSelectUser}
                            fullWidth={true}
                            multiple
                            name='skill'
                        >
                            {skills.map((name) => (
                                <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, user, theme)}
                                >
                                {name}
                                </MenuItem>
                            ))}
                        </Select>
                        <Typography variant='caption' sx={{ marginLeft: 1, marginTop: 1, color: 'rgba(4,30,66, 0.5)' }}>Note: Your first skill in this list will be considered as primary</Typography>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Comapanyname"
                      label="Company Name"
                      id="Comapany-name"
                      autoComplete="new-name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Designation"
                      label="Designation"
                      id="Comapany-Designation"
                      autoComplete="new-Designation"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="workingSince"
                      label="Joining Year"
                      id="joining-year"
                      autoComplete="joining-year"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="contact"
                      label="Contact Number"
                      id="contact"
                      autoComplete="contact"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="Comapanyweblink"
                      label="Company Website Link"
                      id="Comapanyweblink"
                      autoComplete="Comapanyweblink"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="ComapanyDescription"
                      label="Company Description"
                      id="Comapany-Description"
                      autoComplete="new-Description"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="LinkedinProfileLink"
                      label="Linkedin Profile Link"
                      id="Linkedin-Profile-Link"
                      autoComplete="new-Linkedin-Profile-Link"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="GithubProfileLink"
                      label="Github Profile Link"
                      id="Github-Profile-Link"
                      autoComplete="new-Github-Profile-Link"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="address"
                      label="Address"
                      id="address"
                      autoComplete="address"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="country"
                      label="Country"
                      id="country"
                      autoComplete="country"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="city"
                      label="city"
                      id="City"
                      autoComplete="city"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{
                        border: '1px solid rgba(4,30,66, 0.3)',
                        borderRadius: '5px',
                        p: 2,
                      }}>

                        <Grid item xs={12}>
                          <Button variant="outlined" component="label" fullWidth startIcon={<UploadFileIcon />}>
                            Upload documents
                            <input 
                              hidden 
                              accept="application/pdf" 
                              type="file"
                              multiple
                              onChange={event => {
                                setFiles(Array.from(event.target.files));
                              }}
                            />
                          </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <List>
                              {files.map(file => (
                                <ListItem key={file.name}>
                                  <ListItemText primary={file.name} />
                                </ListItem>
                              ))}
                            </List>
                        </Grid>
                      </Box>
                  </Grid>

                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  sx={{ mt: 3, mb: 2, backgroundColor: '#F39223', color: '#fff',  width: '100%', marginTop: '10px', '&:hover': { backgroundColor: '#ef860d'  }}}
                >
                  Sign Up
                </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to='/' variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>

              </Box>
            </Box>
           
          </Container>
        </ThemeProvider>
      );
}

export default Signup