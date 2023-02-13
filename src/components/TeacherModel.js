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
    bgcolor: 'background.paper',
    border: '1px solid #153E52',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
  };


const TeacherModel = (props) => {

  const [name, setName] = useState(props.name);
  const [desc, setDesc] = useState(props.desc);
  const [talks, setTalks] = useState(props.talk);
  const [num, setNum] = useState(props.pNum);
  const [loc, setLoc] = useState(props.loc);
  const [errorTalks, setErrorTalks] = useState(0);
  const [error, setError] = useState(0);
  const [textNum, setTextNum] = useState(0);
//   console.log(textNum);

  const handleTalks = (e) => {
    let str = e.target.value;
    if (str.split(",").length > 3){
        setErrorTalks(1)
    } else {
        setErrorTalks(0)
        setTalks(str.split(",").slice(0, 3).join(","))
        }
    }

    const handleDescription = (e) => {
        const str = e.target.value;
        setDesc(e.target.value);
        setTextNum(str.length)
        if (str.length > 125){
            setError(1)
        } else {
            setError(0)
        }
    }

    function handleChange(event, setState) {
        setState(event.target.value);
    }

    const handleSubmitClose = () => {
        if (error === 1 || errorTalks === 1){
            alert("Please write description only for 125 characters OR You can write only three comma separated values in talks about")
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
            
            <Typography variant="h5" sx={{ color: '#153E52', textDecoration: 'underline'}}>Edit Profile</Typography>
            </Stack>
            
            
            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Change Name" variant="outlined" defaultValue={props.name} onChange={(event) => handleChange(event, setName)}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Change Phone Number" variant="outlined" defaultValue={props.pNum} />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        label="Profile Description" 
                        variant="outlined" 
                        fullWidth 
                        multiline 
                        defaultValue={props.desc} 
                        error={Boolean(error)} 
                        maxRows={5} 
                        onChange={handleDescription} 
                        helperText={`You have wrote ${textNum}/125 characters`}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginTop={1} marginBottom={1}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Talks about" variant="outlined" fullWidth helperText="Use Comma to seprate subjects" defaultValue={props.talk} onChange={handleTalks} error={Boolean(errorTalks)} />
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

export default TeacherModel