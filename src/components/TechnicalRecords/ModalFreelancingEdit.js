import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

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

const ModalFreelancingEdit = (props) => {
    const handleSubmitClose = () => {
        props.setOpenState(false);
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
                    <CreateOutlinedIcon sx={{ height: 20, width: 20, color: '#153E52'}} />
                </Avatar>
                
                <Typography variant="h5" sx={{ color: '#153E52', textDecoration: 'underline'}}>Edit Freelance Experience</Typography>
                </Stack>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" variant="standard" label="Position" fullWidth defaultValue={props.skill.position} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Company" variant="standard" fullWidth defaultValue={props.skill.company} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" variant="standard" label="Starting Date" fullWidth defaultValue={props.skill.fromDate} helperText="Date format DD/MM/YYYY "  />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="End Date" variant="standard" fullWidth defaultValue={props.skill.toDate} helperText="If no ending date type 'Present' " />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" variant="standard" label="Level" fullWidth defaultValue={props.skill.level} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Rating" variant="standard" fullWidth defaultValue={props.skill.rating} />
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
                    UPDATE
                </Button>

            </Box>
        </Modal>
    )
}

export default ModalFreelancingEdit