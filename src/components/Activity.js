import React, { useState } from 'react';
import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

const StyledButton = styled(Button)(({ theme }) => ({
  width: 5,
  height: 25,
  color: '#fff',
  borderColor: '#153E52',
  backgroundColor: '#153E52',
  '&:hover': {
    backgroundColor: '#102e3d',
    borderColor: '#153E52',
  },
}))

function createData(label, descr, date) {
  return {label, descr, date};
}

const events = [
  createData('Event at Sir Syed Uni', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 August 2022'),
  createData('Event at NED Syed Uni', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 September 2022'),
  createData('Event at IEEE', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 February 2022'),
  createData('Event at Sir Syed Uni', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 November 2022'),
  createData('Sports Day', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 January 2022'),
  createData('Exhibition', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 June 2022'),
];



const Activity = () => {

  const [activeStep, setActiveStep] = useState(0);

  const eventSucessHandler = () => {
    setActiveStep((activeStep) => activeStep + 1)
  }

  const eventFailureHandler = () => {
    setActiveStep((activeStep) => activeStep - 1)
  }

  const resetHandler = () => {
    setActiveStep(0)
  }


  return (
    <Paper sx={{padding: "5px", borderRadius: '10px'}} elevation={4} >

      <Box sx={{
        marginLeft: 2.5,
        marginTop: 1,
      }}>
        <Stack direction="row">
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Activity</Typography>
          <Button variant="text" sx={{
            marginLeft: 'auto',
            color: '#153E52', 
            '&:hover': {
              backgroundColor: '#d9e6f2',
            }
            }}
            onClick={resetHandler}>
              Reset
            </Button>
        </Stack>
      </Box>

      <Box sx={{
        marginLeft: 2,
        marginTop: 2
      }}>
        <Stepper orientation='vertical' activeStep={activeStep}>
          {
            events.map((items, index) => (
              <Step sx={{ 
                '& .MuiStepLabel-root .Mui-active': { color: '#153E52' },
                '& .MuiStepLabel-root .Mui-completed': { color: '#0a1f29'},
                }} key={index}>
                <StepLabel>
                  <Stack direction="row">
                    <Typography variant='title' sx={{ fontWeight: 'bold' }}>{items.label}</Typography>
                    <Typography color='#153E52' variant='p' fontStyle='italic' sx={{ marginLeft: '10px'}}> {items.date}</Typography>
                  </Stack>
                </StepLabel>
                <StepContent>
                  <Box sx={{
                    bgcolor: '#ebf5fa',
                    borderRadius: 2,
                    border: '1px solid #153E52',
                    padding: 2,
                    marginTop: 1,
                  }}>
                    <Typography variant='p'>{items.descr}</Typography>
                  </Box>

                  <Stack direction="row" spacing={1} marginTop={2}>
                    <Typography variant='title' >Have you attended event?</Typography>
                    <StyledButton variant='contained' onClick={eventSucessHandler}><DoneOutlinedIcon/></StyledButton>
                    <StyledButton variant='contained' onClick={eventFailureHandler}><ClearOutlinedIcon/></StyledButton>
                  </Stack>
                </StepContent>
              </Step>
          ))}
        </Stepper>
      </Box>
    </Paper>
  )
}

export default Activity