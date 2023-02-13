import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import WorkIcon from '@mui/icons-material/Work';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #153E52',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
  };

const AddJobModel = (props) => {

  const [jobTitle, setJobTitle] = useState("");
  const [minCgpa, setMinCgpa] = useState("");
  const [jobsDescription, setJobDescription] = useState("");
  const [skill, setSkill] = useState("");
  const id = localStorage.getItem("id");

  function handleChange(event, setState) {
    setState(event.target.value);
  }
  
  const handleSubmitClose = () => {
        const item = {
            position: jobTitle,
            cgpa: minCgpa,
            requirements : skill,
            job_description: jobsDescription,
            recruiter_id: id,
        }
        axios.post('http://18.183.141.57/management/job-create/', item)
            .catch(error => {
            console.log(error);
        });
        props.setOpenState(false);
  }

  const handleSkills = (event) => {
    setSkill(event.target.value.split(',').join(' | '))
  }

  return (
    <Modal
        open={props.openModal}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style} component="form">
            <Stack direction='row' spacing={1}>
            <Avatar sx={{
              bgcolor: "#fff",
              backgroundColor: '#d9e6f2',
              height: '30px',
              width: '30px',
            }}>
                <WorkIcon sx={{ height: 20, width: 20, color: '#153E52'}} />
            </Avatar>
            
            <Typography variant="h5" sx={{ color: '#153E52', textDecoration: 'underline'}}>Create Job</Typography>
            </Stack>
            
            
            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(event) => handleChange(event, setJobTitle)} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Min. CGPA" variant="outlined" onChange={(event) => handleChange(event, setMinCgpa)} />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Skills" variant="outlined" fullWidth helperText="Use Comma to seprate subjects" onChange={handleSkills}/>
                </Grid>
            </Grid>

            <Grid container spacing={2} marginTop={1} marginBottom={1}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Job Description" variant="outlined" fullWidth onChange={(event) => handleChange(event, setJobDescription)} />
                </Grid>
            </Grid>

            <Button
                variant="contained" 
                fullWidth 
                sx={{
                    bgcolor: '#153E52',
                    '&:hover': {  bgcolor: '#113242' }
                }} 
                onClick={handleSubmitClose}
            >
                Submit
            </Button>

        </Box>
    </Modal>
  )
}

export default AddJobModel