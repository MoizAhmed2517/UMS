import React, { useState, useEffect } from 'react';
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

const ModalProjectEdit = (props) => {

    const [textNum, setTextNum] = useState(props.textLength)
    const [error, setError] = useState(0)

    useEffect(() => {
        setTextNum(props.textLength)
    }, [props.textLength])
    
    const handleDescription = (e) => {
        const str = e.target.value;
        setTextNum(str.length)
        if (str.length > 200){
            setError(1)
        } else {
            setError(0)
        }
    }

    const handleSubmitClose = () => {
        if (error === 1){
            alert("Please write description only for 200 characters")
        } else {
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
                <Typography variant="h5" sx={{ color: '#153E52', textDecoration: 'underline'}}>Edit Freelance Experience</Typography>
                </Stack>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" variant="standard" label="Title" fullWidth defaultValue={props.skill.title} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Project Description" variant="standard" fullWidth defaultValue={props.skill.descr} multiline error={Boolean(error)} maxRows={5} onChange={handleDescription} helperText={`You have wrote ${textNum}/200 characters`}/>
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" variant="standard" label="Top Technology 1" fullWidth defaultValue={props.skill.topSkill1} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Top Technology 1" variant="standard" fullWidth defaultValue={props.skill.topSkill2} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Top Technology 1" variant="standard" fullWidth defaultValue={props.skill.topSkill3} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" variant="standard" label="Project URL" fullWidth defaultValue={props.skill.link} helperText="Link format: https://google.com/"/>
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

export default ModalProjectEdit