import {Box, Card, CardContent, Typography, Grid, Avatar, Stack} from '@mui/material';
import React from 'react';


const GridView = (props) => {

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
                        <Stack direction='row' spacing={1}>
                            <Typography variant='title' sx={{ fontWeight: 'bold', color: '#153E52', paddingTop: '1.5px'}}>{props.TeacherFName}</Typography>
                            <Typography variant='title' sx={{ color: '#153E52'}}>|</Typography>
                            <Typography variant='subtitle2' sx={{ color: '#153E52', paddingTop: '3px'}}>{props.TeacherField}</Typography>
                        </Stack>
                        <Stack direction='row' spacing={1} marginTop="2px">
                            {
                                props.TypeAPI === 'student' ? (
                                    <Typography variant='p' sx={{ fontSize: '14px', color: '#153E52', paddingTop: '1.5px'}}>{`Semester: ${props.TeacherDesignation}`}</Typography>
                                ) : (
                                    <Typography variant='p' sx={{ fontSize: '14px', color: '#153E52', paddingTop: '1.5px'}}>{`Post: ${props.TeacherDesignation}`}</Typography> 
                                )
                            }
                        </Stack>
                        <Typography variant='p' sx={{ fontSize: '14px', paddingTop: '1.5px'}}>{props.TeacherInfo}</Typography>
                        <Typography variant='p' sx={{ fontSize: '14px', color: '#153E52', paddingTop: '1.5px', fontStyle: 'italic', textalign: 'justify'}} display='inline'>.....more</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Box>
  );
}

export default GridView