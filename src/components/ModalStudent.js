import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: '#fff',
    border: '1px solid #153E52',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
  };

const ModalStudent = (props) => {
    const [textNum, setTextNum] = useState(props.skill[0].descr.length);
    const [error, setError] = useState(0);
    const [errorTalks, setErrorTalks] = useState(0);
    const [errorLink, setErrorLink] = useState(0);
    const [talksAbout, setTalksAbout] = useState(props.skill[0].talks);
    const [name, setName] = useState(props.skill[0].name)
    const [bio, setBio] = useState(props.skill[0].descr);
    const [prevOrg, setPrevOrg] = useState(props.skill[0].org);
    const [joinYear, setJoinYear] = useState(props.skill[0].year);
    const [pNum, setPNum] = useState(props.skill[0].pnum);
    const [location, setLocation] = useState(props.skill[0].location);
    const [id, setId] = useState(props.id);
    const [portfolioLink, setPortfolioLink] = useState(props.skill[0].portfolio);
    
    useEffect(() => {
        setTextNum(props.textLength)
    }, [props.textLength])
    
    const handleDescription = (e) => {
        const str = e.target.value;
        setBio(e.target.value);
        setTextNum(str.length)
        if (str.length > 125){
            setError(1)
        } else {
            setError(0)
        }
    }

    const handleTalks = (e) => {
        let str = e.target.value;
        if (str.split(",").length > 3){
            setErrorTalks(1)
        } else {
            setErrorTalks(0)
            setTalksAbout(str.split(",").slice(0, 3).join(","))
        }
    }

    const handlePortfolio = (e) => {
        const valCheck = e.target.value;
        if (valCheck.includes("https://")){
            setPortfolioLink(e.target.value);
            setErrorLink(0);
        } else {
            alert("Portfolio link must be in this format: 'https://someportfolio.com/username' or 'https://someportfolio.anyextension' ")
            setErrorLink(1);
        }
    }

    function handleChange(event, setState) {
        setState(event.target.value);
    }

    const handleSubmitClose = (event) => {
        if (error === 1 || errorTalks === 1){
            alert("Please write description only for 200 characters OR You can write only three comma separated values in talks about")
        } else {
            event.preventDefault();
            const firstName = name.split(" ")[0];
            const LastName = name.split(" ").slice(1).join(" ");
            if (name && name.split(" ").length === 1){
                alert("Please enter full name your surname is missing");
            } else {
                const item = {
                    id: id,
                    first_name: firstName.length !== 0 ? firstName: props.skill[0].name.split(" ")[0],
                    last_name: LastName.length !== 0 ? LastName: props.skill[0].name.split(" ").slice(1).join(" "),
                    profile_description: bio.length !== 0 ? bio : props.skill[0].descr, 
                    talks_about: talksAbout.length !== 0 ? talksAbout : props.skill[0].talks,
                    semester: joinYear.length !== 0 ? joinYear : props.skill[0].year,
                    phone_num: pNum.length !== 0 ? pNum : props.skill[0].pnum,
                    department: prevOrg.length !== 0 ? prevOrg : props.skill[0].org,
                    portfolio: portfolioLink.length !== 0 ? portfolioLink: props.skill[0].portfolio,
                }
                axios.post('http://18.183.141.57/management/student-edit/', item)
                    .catch(error => {
                    console.log(error);
                });
                props.setOpenState(false);
            }
            
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
                    <Grid item xs={12}>
                        <TextField id="outlined-name" variant="standard" label="Name" fullWidth defaultValue={props.skill[0].name} onChange={(event) => handleChange(event, setName)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-descr" label="Profile Bio" variant="standard" fullWidth defaultValue={props.skill[0].descr} multiline error={Boolean(error)} maxRows={5} onChange={handleDescription} helperText={`You have wrote ${textNum}/125 characters`} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-prevOrg" variant="standard" label="Department" fullWidth defaultValue={props.skill[0].org} onChange={(event) => handleChange(event, setPrevOrg)}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-year" label="Department" variant="standard" fullWidth defaultValue={props.skill[0].year} helperText="Write only in number E.g: 7th to be 7" onChange={(event) => handleChange(event, setJoinYear)} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-talks" variant="standard" label="talks about" fullWidth defaultValue={props.skill[0].talks} onChange={handleTalks} error={Boolean(errorTalks)} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-talks" variant="standard" label="Portfolio Link" fullWidth defaultValue={props.skill[0].portfolio} onChange={handlePortfolio} error={Boolean(errorLink)} helperText="It need to be in this format with http://abc.com" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-phone" variant="standard" label="Phone number" fullWidth defaultValue={props.skill[0].pnum} helperText="Format: +44XXXXXXXXX" onChange={(event) => handleChange(event, setPNum)}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-location" label="Location" variant="standard" fullWidth defaultValue={props.skill[0].location} helperText="Format: City/State/Country" onChange={(event) => handleChange(event, setLocation)}/>
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

export default ModalStudent