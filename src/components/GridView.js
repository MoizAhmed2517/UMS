import {Box, Card, CardContent, Typography, Grid, Avatar, Stack} from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import { useUserId } from './groups/useUserId';
import { useNavigate } from 'react-router-dom';

const GridView = (props) => {

  const { searchUserId, setSearchUserId } = useUserId();
  const navigate = useNavigate();

  const handleChip = () => {
    if (props.TypeAPI === "student"){
        navigate('/StudentSearchProfile', {
            state: {
                userId: props.studentId
            }
        })
    }
  };

  return (
    <Box sx={{
        bgcolor: 'lightblue',
    }}>
        <Card elevation={5}>
            <CardContent>
                <Grid container spacing={2}>

                    <Grid item xs={2}>
                        <Avatar sx={{ backgroundColor: '#153E52', marginTop: '4px'}}/>
                    </Grid>

                    <Grid item xs={10}>
                        
                            <Typography variant='title' sx={{ fontWeight: 'bold', color: '#153E52', paddingTop: '1.5px'}}>{props.TeacherFName}</Typography>
                            <Typography variant='subtitle2' sx={{ color: '#153E52', paddingTop: '3px'}}>{`Field: ${props.TeacherField}`}</Typography>
                        
                        <Stack direction='row' spacing={1} marginTop="2px">
                            {
                                props.TypeAPI === 'student' ? (
                                    <Typography variant='title' sx={{ fontSize: '14px', color: '#153E52', paddingTop: '1.5px'}}>{`Semester: ${props.TeacherDesignation}`}</Typography>
                                ) : (
                                    <Typography variant='title' sx={{ fontSize: '14px', color: '#153E52', paddingTop: '1.5px'}}>{`Post: ${props.TeacherDesignation}`}</Typography> 
                                )
                            }
                        </Stack>
                        <Typography variant='p' sx={{ fontSize: '14px', paddingTop: '1.5px', marginTop: '5px'}}>{props.TeacherInfo}</Typography> 
                        <Chip label="View" sx={{ marginTop: '3px', borderRadius: '5px', height: '22px', color: '#153E52', fontWeight: 'bold', marginLeft: '4px' }} onClick={handleChip}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Box>
  );
}

export default GridView