import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from "../Notification";
import Activity from "../Activity";
import CalendarFull from "../CalendarFull";
import InfoCard from '../InfoCard';
import axios from 'axios';
import { useLocation } from 'react-router';

const Teacher = () => {

  const locationexist = useLocation();
  const id = locationexist.state?.userId
  const type = locationexist.state?.type

  useEffect(() => {
    if (id !== undefined && type !== undefined) {
      localStorage.setItem('id', id)
      localStorage.setItem('type', type)
    }
  }, [id, type])

  const [userLoginId, setUserLoginId] = useState(localStorage.getItem('id') || id);
  const [userType, setUserType] = useState(localStorage.getItem('type') || type);

  useEffect(() => {
    if (id !== undefined && type !== undefined) {
      localStorage.setItem('id', id)
      localStorage.setItem('type', type)
    }
  }, [id, type])

  console.log(userLoginId);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://18.183.141.57/management/teacher-detail/${userLoginId}/`);
      console.log(res.data);
    }
    fetchData();
  }, [])


  return (
    <Box>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="column" spacing={4}>
            <InfoCard/>
            <Activity />
            <CalendarFull />
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Notification />
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default Teacher