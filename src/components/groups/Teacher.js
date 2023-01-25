import React from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from "../Notification";
import Activity from "../Activity";
import CalendarFull from "../CalendarFull";
import InfoCard from '../InfoCard';

const Teacher = () => {
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