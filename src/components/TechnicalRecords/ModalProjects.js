import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useUserId } from '../groups/useUserId';
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

const ModalProjects = (props) => {

  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [topSkill1, setTopSkill1] = useState('');
  const [topSkill2, setTopSkill2] = useState('');
  const [topSkill3, setTopSkill3] = useState('');
  const [textLen, setTextLen] = useState(0);
  const [error, setError] = useState(false);
  const { userId, setUserId } = useUserId();

  const handleSubmitClose = (event) => {
    if(!title && !descr && !topSkill1 && !topSkill2 && !topSkill3){
      alert('Please fill the empty values');
    } else {
        if(error){
            alert("You have reached your limit of 200 characters.")
        } else {
            event.preventDefault();
            const item = {
                student_id: userId,
                name: title,
                description: descr,
                top_skill1: topSkill1,
                top_skill2: topSkill2,
                top_skill3: topSkill3,
              }
            axios.post('http://18.183.141.57/management/project/', item)
                .then(response => {
                    console.log(response);
                })
                    .catch(error => {
                    console.log(error);
            });
            props.setOpenState(false);
        }
    }
  }

  const handleChange = (e, setState) => {
    setState(e.target.value);
    
  }

  const handleDescr = (e) => {
    setDescr(e.target.value)
    setTextLen(e.target.value.length)
    if(e.target.value.length >= 200) {
        setError(true);
    } else {
        setError(false);
    }
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
            
            <Typography variant="h5" sx={{ color: '#153E52', textDecoration: 'underline'}}>Add New Project</Typography>
            </Stack>
            
            
            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={12}>
                    <TextField id="outlined-Title" label="Project Name" variant="outlined" fullWidth value={title} onChange={(event) => handleChange(event, setTitle)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-Descr" label="Describe You Project" variant="outlined" fullWidth value={descr} onChange={handleDescr} multiline rows={4} helperText={`You have wrote ${textLen}/200 characters.`} error={error}/>
                </Grid>
            </Grid>

            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={4}>
                    <TextField id="outlined-skill1" label="Skill-1" variant="outlined" fullWidth value={topSkill1} onChange={(event) => handleChange(event, setTopSkill1)} />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-skill2" label="Skill-2" variant="outlined" fullWidth value={topSkill2} onChange={(event) => handleChange(event, setTopSkill2)} />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-skill3" label="Skill-3" variant="outlined" fullWidth value={topSkill3} onChange={(event) => handleChange(event, setTopSkill3)} />
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

export default ModalProjects