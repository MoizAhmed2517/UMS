import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#fff',
    border: '1px solid #153E52',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
};

const ModalExperience = (props) => {

    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [fromDate, setfromDate] = useState(new Date());
    const [check, setCheck] = useState(true);
    const [toDate, setToDate] = useState(null);
    const id = localStorage.getItem('id');

    function handleChange(event, setState) {
        setState(event.target.value);
    }
    
    const handleSubmitClose = (event) => {
        if (!location || !position || !company || !type) {
            alert("Please fill the empty field");
        } else {
            event.preventDefault();
            const item = {
                student_id: id,
                company_name: company,
                position : position,
                start_date: fromDate,
                end_date: toDate,
                type: type,
            }
            axios.post('http://18.183.141.57/management/experience/', item)
                .then(response => {
                    console.log(response);
                })
                    .catch(error => {
                    console.log(error);
            });
            props.setOpenState(false);
        }  
    }

    const handleType = (event) => {
        setType(event.target.value)
    }

    const handleCheck = (event) => {
        setCheck(event.target.checked);
        if(check){
            setToDate(null);
        }else {
            setToDate(new Date());
        }
    }

    const handleSetFromDate = (newVal) => {
        setfromDate(newVal);
    }
    
    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                <Typography variant="h5" sx={{ color: '#153E52', textDecoration: 'underline'}}>Add New Experience</Typography>
                </Stack>
                
                
                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-company" label="Company Name" variant="outlined" fullWidth value={company} onChange={(event) => handleChange(event, setCompany)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-position" label="Position" variant="outlined" fullWidth value={position} onChange={(event) => handleChange(event, setPosition)} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={6}>
                        <TextField id="outlined-location" label="Location" variant="outlined" fullWidth helperText="Format: City,Country" value={location} onChange={(event) => handleChange(event, setLocation)}/>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel id="Type-Select">Type</InputLabel>
                            <Select
                                labelId="Type-Select"
                                id="demo-simple-select"
                                value={type}
                                label="Age"
                                onChange={handleType}
                                >
                                <MenuItem value={1}>Full-Time</MenuItem>
                                <MenuItem value={2}>Part-Time</MenuItem>
                                <MenuItem value={3}>Internship</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel 
                            control={
                                <Checkbox checked={check} onChange={handleCheck} inputProps={{ 'aria-label': 'controlled' }} sx={{ color: '#153E52' }} />
                            } 
                            label="I am currently working in this role" />
                        </FormGroup>
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginTop={1} marginBottom={1}>
                    <Grid item xs={6}>
                        <DesktopDatePicker
                            label="Starting Date"
                            inputFormat="MM/DD/YYYY"
                            value={fromDate}
                            onChange={handleSetFromDate}
                            renderInput={(params) => <TextField {...params} />}
                        />  
                    </Grid>
                    <Grid item xs={6}>
                        {
                            check
                            ? (
                                <DesktopDatePicker
                                    label="Ending Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={toDate === "Present" ? "Present" : toDate}
                                    onChange={toDate !== "Present" ? setToDate : () => {}}
                                    renderInput={(params) => <TextField {...params} />}
                                    disabled={toDate === "Present"}
                                />
                            ) : (
                                <DesktopDatePicker
                                    label="Ending Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={toDate}
                                    onChange={setToDate}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            ) 
                        }
                        
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
    </LocalizationProvider>
    )
}

export default ModalExperience