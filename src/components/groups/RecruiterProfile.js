import React from 'react'
import InfoCardRecruiter from '../InfoCardRecruiter';
import { Box, Paper, Typography, Stack, Grid, Button } from '@mui/material';
import { Container } from '@mui/system';
import JobsAccordion from '../JobsAccordion';

const RecruiterProfile = () => {
  return (
    <Container>
      <Grid container marginTop={1} >
        <Grid item xs={12}>
          <InfoCardRecruiter />
        </Grid>
        <Grid item xs={12} marginTop={2}>
          <JobsAccordion />
        </Grid>
      </Grid>
    </Container>
  )
}

export default RecruiterProfile