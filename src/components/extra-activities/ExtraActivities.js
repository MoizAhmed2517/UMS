import React from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from "../Notification";
import Header from './Header';
import SportsTable from './SportsTable';

import DebateTable from './DebateTable';

const ExtraActivities = () => {
  return (
    <Box sx={{
      marginBottom: '5px'
    }}>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
      >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="column" spacing={4}>
            <Header />
            <SportsTable />
            
            <DebateTable />
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

export default ExtraActivities