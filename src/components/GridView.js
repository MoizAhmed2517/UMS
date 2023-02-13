import {Box, Card, CardContent, Typography, Grid, Avatar, Stack} from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';

const GridView = (props) => {

  const navigate = useNavigate();

  const handleChipStudent = () => {
    console.log('Student handle')
    if (props.TypeAPI === "student"){
        navigate('/StudentSearchProfile', {
            state: {
                userId: props.studentId
            }
        })
    }
  };

  const handleChipTeacher = () => {
    console.log('Teacher handle')
    if (props.TypeAPI === "teacher"){
        navigate('/TeacherSearchProfile', {
            state: {
                userId: props.studentId
            }
        })
    }
  }

  const handleChipRecruiter = () => {
    console.log('Recruiter handle')
    if (props.TypeAPI === "recruiter"){
        navigate('/RecruiterSearchProfile', {
            state: {
                userId: props.studentId
            }
        })
    }
  }

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
                            {
                                props.TypeAPI === 'recruiter' ? (
                                    <Typography variant='subtitle2' sx={{ color: '#153E52', paddingTop: '3px'}}>{`Company: ${props.TeacherField}`}</Typography>
                                ) : (
                                    <Typography variant='subtitle2' sx={{ color: '#153E52', paddingTop: '3px'}}>{`Field: ${props.TeacherField}`}</Typography>
                                )
                            }

                            {
                                props.TypeAPI === 'student' && (
                                    <>
                                        <Typography variant='subtitle2' sx={{ color: '#153E52', paddingTop: '3px'}}>{`Top SKills: ${props.skill.slice(0,3)}`}</Typography>
                                        <Typography variant='subtitle2' sx={{ color: '#153E52', paddingTop: '3px'}}>{`Experience: ${props.exp} Years`}</Typography>
                                    </>
                                )
                            }
                        <Stack direction='row' spacing={1} marginTop="2px">
                            {
                                props.TypeAPI === 'student' ? (
                                    <>
                                        <Typography variant='title' sx={{ fontSize: '14px', color: '#153E52', paddingTop: '1.5px'}}>{`Semester: ${props.TeacherDesignation}`}</Typography>
                                        <Typography variant='subtitle2' sx={{ color: '#153E52', paddingTop: '1.5px'}}>{`| CGPA: ${props.gpa}`}</Typography>
                                    </>
                                ) : (
                                    <Typography variant='title' sx={{ fontSize: '14px', color: '#153E52', paddingTop: '1.5px'}}>{`Postition: ${props.TeacherDesignation}`}</Typography> 
                                )
                            }
                        </Stack>
                        {
                            props.TypeAPI === 'recruiter' ? (
                                <>
                                    <Typography variant='subtitle2' sx={{ color: '#153E52', paddingTop: '3px'}}>{`#Hiring: ${props.TeacherInfo.split(',').slice(0,3)}`}</Typography>
                                    <Chip label="View" sx={{ marginTop: '3px', borderRadius: '5px', height: '22px', color: '#153E52', fontWeight: 'bold', marginLeft: '4px' }} onClick={handleChipRecruiter}/>
                                </>
                            ) : props.TypeAPI === 'student' ? (
                                <>
                                    <Typography variant='p' sx={{ fontSize: '14px', paddingTop: '1.5px', marginTop: '5px'}}>{`Batch: ${props.TeacherInfo}`}</Typography>
                                    <Chip label="View" sx={{ marginTop: '3px', borderRadius: '5px', height: '22px', color: '#153E52', fontWeight: 'bold', marginLeft: '4px' }} onClick={handleChipStudent}/>
                                </>
                            ) : (
                                <>
                                    <Typography variant='p' sx={{ fontSize: '14px', paddingTop: '1.5px', marginTop: '5px'}}>{props.TeacherInfo}</Typography>
                                    <Chip label="View" sx={{ marginTop: '3px', borderRadius: '5px', height: '22px', color: '#153E52', fontWeight: 'bold', marginLeft: '4px' }} onClick={handleChipTeacher}/>
                                </>
                            )
                        }
                        
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Box>
  );
}

export default GridView