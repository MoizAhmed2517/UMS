import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useUserId } from './groups/useUserId';
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

const EndrosementModal = (props) => {
    const [error, setError] = useState(0);
    const [bio, setBio] = useState("");
    const [dateEndrose, setDate] = useState(new Date());
    const [textNum, setTextNum] = useState(0)
    const profileId = Number(localStorage.getItem('id'))

    const formattedDate = dateEndrose.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    
    const handleDescription = (e) => {
        const str = e.target.value;
        setBio(e.target.value);
        setTextNum(str.length)
        if (str.length > 200){
            setError(1)
        } else {
            setError(0)
        }
    }


    const handleSubmitClose = (event) => {
        if (error === 1){
            alert("Please write description only for 200 characters")
        } else if (bio.length === 0) {
            alert("Please write endrosement. Empty endrosement cannot be send to the user");
            
        } else if (profileId === props.userSearchID) {
            alert("You cannot give endrosement to yourself");
        } else {
            event.preventDefault();
            const item = {
                giver_student_id: profileId,
                reciever_student_id: props.userSearchID,
                endorsement: bio,
                datetime: formattedDate   
            }
            axios.post('http://18.183.141.57/management/endorsement-create/', item)
                .then(response => {
                    console.log(response);
                })
                    .catch(error => {
                    console.log(error);
            });
            props.setOpenState(false);
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
                    <CreateOutlinedIcon sx={{ height: 20, width: 20, color: '#153E52'}} />
                </Avatar>
                <Typography variant="h5" sx={{ color: '#153E52', textDecoration: 'underline'}}>Endorsement</Typography>
                </Stack>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-descr" label="Endrosement" variant="outlined" fullWidth multiline error={Boolean(error)} maxRows={8} onChange={handleDescription} helperText={`You have wrote ${textNum}/200 characters`} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-talks" variant="standard" label="Endrosement Date" fullWidth defaultValue={formattedDate} disabled  />
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
                    SEND
                </Button>

            </Box>
        </Modal>

    )
}

export default EndrosementModal