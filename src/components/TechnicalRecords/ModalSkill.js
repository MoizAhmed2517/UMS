import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '1px solid #153E52',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
  };

const ModalSkill = (props) => {

  const [skill, setSkill] = useState('');
  const id = localStorage.getItem("id");

  const handleSubmitClose = (event) => {
    if(!skill){
      alert('Please fill the empty values');
    } else {
      event.preventDefault();
      const item = {
        student_id: id,
        skill: skill
      }
      axios.post('http://18.183.141.57/management/skill/', item)
        .catch(error => {
          console.log(error);
        });
      props.setOpenState(false);
    }
  }

  const handleSkill = (e) => {
    setSkill(e.target.value);
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
                <AddIcon sx={{ height: 20, width: 20, color: '#153E52'}} />
            </Avatar>
            
            <Typography variant="h5" sx={{ color: '#153E52', textDecoration: 'underline'}}>Add Skill</Typography>
            </Stack>
            
            
            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Add New Skill" variant="outlined" fullWidth value={skill} onChange={handleSkill}/>
                </Grid>
            </Grid>

            <Button
                variant="contained" 
                fullWidth 
                sx={{
                    bgcolor: '#153E52',
                    '&:hover': {  bgcolor: '#113242' },
                    marginTop: '15px',
                }} 
                onClick={handleSubmitClose}
            >
                Submit
            </Button>

        </Box>
    </Modal>
  )
}

export default ModalSkill