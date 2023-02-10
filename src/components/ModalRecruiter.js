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

const ModalRecruiter = (props) => {
    {/* id, name, designation, lookfor, pnum, location, LinkedIn, github, email, org, orgYear, orgDesc, orgWeb, skills */}

    const [name, setName] = useState(props.skill[0].name);
    const [designation, setDesignation] = useState(props.skill[0].designation);
    const [lookFor, setLookFor] = useState(props.skill[0].lookfor);
    const [errorLook, setErrorLook] = useState(0);
    const [textNumLook, setTextNumLook] = useState(props.skill[0].lookfor.length);
    const [address, setAddress] = useState(props.skill[0].location.split(",")[0]) ;
    const [city, setCity] = useState(props.skill[0].location.split(",")[1]) ;
    const [country, setCountry] = useState(props.skill[0].location.split(",")[2]) ;
    const [org, setOrg] = useState(props.skill[0].org);
    const [orgYear, setOrgYear] = useState(props.skill[0].orgYear);
    const [textNum, setTextNum] = useState(props.skill[0].orgDesc.length);
    const [orgDesc, setOrgDesc] = useState(props.skill[0].orgDesc);
    const [error, setError] = useState(0);
    const [email, setEmail] = useState(props.skill[0].email);
    const [errorEmail, setErrorEmail] = useState(0);
    const [linkedIn, setLinkedIn] = useState(props.skill[0].LinkedIn);
    const [github, setGithub] = useState(props.skill[0].github);
    const [errorGit, setErrorGit] = useState(0);
    const [errorIn, setErrorIn] = useState(0);

    // useEffect(() => {
    //     setTextNum(props.textLength)
    // }, [props.textLength])
    
    const handleDescription = (e) => {
        const str = e.target.value;
        setOrgDesc(e.target.value);
        setTextNum(str.length)
        if (str.length > 150){
            setError(1)
        } else {
            setError(0)
        }
    }

    const handleTalks = (e) => {
        const str = e.target.value;
        setLookFor(e.target.value);
        setTextNumLook(str.length)
        if (str.length > 60){
            setErrorLook(1)
        } else {
            setErrorLook(0)
        }
    }

    const handleLinkedIn = (e) => {
        const valCheck = e.target.value;
        if (valCheck.includes("https://")){
            setLinkedIn(e.target.value);
            setErrorIn(0);
        } else {
            setErrorIn(1);
        }
    }

    const handleGit = (e) => {
        const valCheck = e.target.value;
        if (valCheck.includes("https://")){
            setGithub(e.target.value);
            setErrorGit(0);
        } else {
            setErrorGit(1);
        }
    }

    const handleEmail = (e) => {
        const valCheck = e.target.value;
        if (valCheck.includes("@")){
            setEmail(e.target.value);
            setErrorEmail(0);
        } else {
            setErrorEmail(1);
        }
    }



    function handleChange(event, setState) {
        setState(event.target.value);
    }

    const handleSubmitClose = (event) => {
        if (error === 1 || errorLook === 1 || errorGit === 1 || errorIn === 1 || errorEmail ===1 ){
            alert("Please write description only for 60 characters in Looking for field and 150 character in company description. Include https:// in links and @ in email address")
        } else {
            setErrorLook(0)
            setError(0);
            // event.preventDefault();
            // const firstName = name.split(" ")[0];
            // const LastName = name.split(" ").slice(1).join(" ");
            // if (name && name.split(" ").length === 1){
            //     alert("Please enter full name your surname is missing");
            // } else {
            //     const item = {
            //         id: id,
            //         first_name: firstName.length !== 0 ? firstName: props.skill[0].name.split(" ")[0],
            //         last_name: LastName.length !== 0 ? LastName: props.skill[0].name.split(" ").slice(1).join(" "),
            //         profile_description: bio.length !== 0 ? bio : props.skill[0].descr, 
            //         talks_about: talksAbout.length !== 0 ? talksAbout : props.skill[0].talks,
            //         semester: joinYear.length !== 0 ? joinYear : props.skill[0].year,
            //         phone_num: pNum.length !== 0 ? pNum : props.skill[0].pnum,
            //         department: prevOrg.length !== 0 ? prevOrg : props.skill[0].org,
            //         portfolio: portfolioLink.length !== 0 ? portfolioLink: props.skill[0].portfolio,
            //     }
            //     axios.post('http://18.183.141.57/management/student-edit/', item)
            //         .catch(error => {
            //         console.log(error);
            //     });
                props.setOpenState(false);
            }      
        }
    
    return ( 

        <Modal
            open={props.openModal}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                position:'absolute',
                top: '10%',
                overflow:'auto',
                height:'100%',
                display:'block',
            }}
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
                {/* id, name, designation, lookfor, pnum, location, LinkedIn, github, email, org, orgYear, orgDesc, orgWeb, skills */}
                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-name" variant="standard" label="Name" fullWidth defaultValue={props.skill[0].name} onChange={(event) => handleChange(event, setName)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-desg" variant="standard" label="Designation" fullWidth defaultValue={props.skill[0].designation} onChange={(event) => handleChange(event, setDesignation)} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}> 
                    <Grid item xs={12}>
                        <TextField id="outlined-look" variant="standard" label="Looking For" fullWidth defaultValue={props.skill[0].lookfor} onChange={handleTalks} error={Boolean(errorLook)} helperText={`You have wrote ${textNumLook}/50 characters`} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}> 
                    <Grid item xs={4}>
                        <TextField id="outlined-address" variant="standard" label="Address" fullWidth defaultValue={props.skill[0].location.split(",")[0]} onChange={(event) => handleChange(event, setAddress)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-city" variant="standard" label="City" fullWidth defaultValue={props.skill[0].location.split(",")[1]} onChange={(event) => handleChange(event, setCity)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-country" variant="standard" label="Country" fullWidth defaultValue={props.skill[0].location.split(",")[2]} onChange={(event) => handleChange(event, setCountry)} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-org" variant="standard" label="Company Name" fullWidth defaultValue={props.skill[0].org} onChange={(event) => handleChange(event, setOrg)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-orgyear" variant="standard" label="Working Since" fullWidth defaultValue={props.skill[0].orgYear} onChange={(event) => handleChange(event, setOrgYear)} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-descr" label="Company Description" variant="standard" fullWidth defaultValue={props.skill[0].orgDesc} multiline error={Boolean(error)} maxRows={5} onChange={handleDescription} helperText={`You have wrote ${textNum}/60 characters`} />
                    </Grid>
                </Grid>


                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-email" variant="standard" label="Email" fullWidth defaultValue={props.skill[0].email} onChange={handleEmail} error={Boolean(errorEmail)} helperText="It need to be in this format with xyz@someemail.com" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-in" variant="standard" label="LinkedIn ID" fullWidth defaultValue={props.skill[0].LinkedIn} onChange={handleLinkedIn} error={Boolean(errorIn)} helperText="It need to be in this format with https://username" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <TextField id="outlined-git" variant="standard" label="Github ID" fullWidth defaultValue={props.skill[0].github} onChange={handleGit} error={Boolean(errorGit)} helperText="It need to be in this format with https://username" />
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

export default ModalRecruiter