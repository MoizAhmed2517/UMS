import React, { useState, useEffect } from 'react';
import { Paper, Box, Stack, Typography, Button} from '@mui/material'
import { Container} from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';
import QuizEnd from './QuizEnd';

const QuizStart = () => {

  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  const handleAnsSelect = (event) => {
    setAnswer(event.target.value);
  }

  const handleSubmitQuiz = () => {
    navigate('/QuizEnd');
  }



  return (
    <Container maxWidth="lg" sx={{ marginTop : '20px' }}>
        { timeRemaining <=0 ? 
            ( <QuizEnd /> ) : 
            (
            <React.Fragment>
            <Paper sx={{padding: "5px", borderRadius: '10px'}} elevation={8}>
                <Box sx={{
                    marginLeft: 2.5,
                    marginTop: 1,
                    marginBottom: 1,
                }}>
                    <Stack direction="row">
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>React JS</Typography>
                        <Typography variant="h6" sx={{ marginLeft: 'auto', paddingRight: '15px'}} ><Timer/></Typography>
                    </Stack>
                </Box>
            </Paper>

            <Box sx={{
                marginTop: '20px',
                borderRadius: '10px',
                p: '20px 20px 20px 20px',
                height: 'auto',
                width: '96.5%',
                marginBottom: '6px',
                backgroundColor: '#fff',
                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',

            }}
                elevation={12}
            >
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Which operator returns true if the two compared values are not equal?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={answer}
                        onChange={handleAnsSelect}
                        sx={{
                            '&.Mui-checked': {
                                color: 'yellow',
                            },
                        }}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Button variant='contained' size='large' sx={{ backgroundColor: '#153E52',  width: '100%', marginTop: '10px', '&:hover': { backgroundColor: '#102f3e' } }} onClick={handleSubmitQuiz}>Submit Quiz</Button>
            </React.Fragment>
            )}
        
        
    </Container>
  )
}

export default QuizStart