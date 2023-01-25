import { Paper, Box, Stack, Icon, Tooltip, Typography, Button} from '@mui/material'
import React from 'react';
import { Container} from '@mui/system';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Quiz = () => {

  const location = useLocation()
  const question = location.state?.question
  console.log(question)
  const navigate = useNavigate();
  const handleQuizStart = () => {
    navigate('/QuizStart');
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop : '20px' }}>

        <Paper sx={{padding: "5px", borderRadius: '10px'}} elevation={8}>
            <Box sx={{
                marginLeft: 2.5,
                marginTop: 1,
                marginBottom: 1,
            }}>
                <Stack direction="row">
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>React JS</Typography>

                    <Tooltip title="You have 15 mins to complete the quiz">
                        <Icon sx={{ fontSize: 25, marginLeft: '4px', color: '#153E52'}}><HelpOutlineRoundedIcon /></Icon>
                    </Tooltip>

                </Stack>
            </Box>
        </Paper>

        <Paper sx={{
            marginTop: '20px',
            borderRadius: '10px',
            p: '20px 20px 20px 20px',
            height: 'auto',
            marginBottom: '6px',
        }}
            elevation={12}
        >
            
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Instructions</Typography>
            <hr />
            <Stack direction="column">
                <Typography variant="p">Quiz composed of 15 question. You have only 15 minutes to complete the quiz. Please make sure you have strong internet connection. Once your connection drop, your quiz will be automatically discarded form the system and you need to retake it once again.</Typography>
                <Typography variant="caption" sx={{ marginTop: '10px', fontWeight: 'bold' }}>Quiz composed of multiple choice Question/Answer. Each question has 4 options with only one correct answer.</Typography>
                <Button variant="contained" size='large' sx={{ backgroundColor: '#153E52', marginTop: '10px', '&:hover': { backgroundColor: '#102f3e' } }} onClick={handleQuizStart}>Start Test</Button>
            </Stack>
            
        </Paper>

    </Container>

  )
}

export default Quiz