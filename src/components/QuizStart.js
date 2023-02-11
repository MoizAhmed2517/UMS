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
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const QuizStart = () => {

  const location = useLocation();
  const question = location.state?.quiz;
  const name = location.state?.name;
  const quizId = location.state?.quizId;
  const time = parseInt(location.state?.quizTime);
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(time * 60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const id = localStorage.getItem("id");

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
    const item = {
        student_id: id,
        quiz_id: quizId,
        marks_obtained: score
    }
    axios.post('http://18.183.141.57/management/quiz-update/', item)
        .then(response => console.log(response))
        .catch(error => {
          console.log(error);
        });

    navigate('/QuizEnd', {
        state: {
            result: score,
            total: question.length,
            quizName: name,
        }
    });  
  }

  const handleNextQuestion = () => {
    if (answer !== ""){
        if (question[currentQuestion].correct === answer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
        setAnswer("")
    } else {
        alert("Please select any answer before moving forward")
    }
    
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
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{name}</Typography>
                        <Typography variant="h6" sx={{ marginLeft: 'auto', paddingRight: '15px'}} ><Timer timer={time}/></Typography>
                    </Stack>
                </Box>
            </Paper>

            {
                currentQuestion < question.length && (
                    <Box sx={{
                        marginTop: '20px',
                        borderRadius: '5px',
                        p: '5px',
                        height: 'auto',
                        width: 'auto',
                        backgroundColor: '#153E52',
                        color: '#fff'
                    }}
                        elevation={12}
                    >
                        <Typography variant='h6' sx={{ textAlign: 'center' }}>{`${currentQuestion+1}/${question.length}`}</Typography>
                    </Box>
                )
            }
                   
            
            {
                currentQuestion < question.length && (
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
                            <FormLabel id="demo-radio-buttons-1">{question[currentQuestion].question}</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-1"
                                name="radio-buttons-1"
                                value={answer}
                                onChange={handleAnsSelect}
                                sx={{
                                    '&.Mui-checked': {
                                        color: 'yellow',
                                    },
                                }}
                            >
                                <FormControlLabel value={question[currentQuestion].a} control={<Radio />} label={question[currentQuestion].a} />
                                <FormControlLabel value={question[currentQuestion].b} control={<Radio />} label={question[currentQuestion].b} />
                                <FormControlLabel value={question[currentQuestion].c} control={<Radio />} label={question[currentQuestion].c} />
                                <FormControlLabel value={question[currentQuestion].d} control={<Radio />} label={question[currentQuestion].d} />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                )
            }

                        
            {
                currentQuestion !== question.length ? 
                    <Button variant='contained' size='large' sx={{ backgroundColor: '#153E52',  width: '100%', marginTop: '10px', '&:hover': { backgroundColor: '#102f3e' } }} onClick={handleNextQuestion}>Next</Button>
                :
                    <>
                        <Paper sx={{padding: "5px", borderRadius: '10px', marginTop: 3}} elevation={8}>
                            <Box sx={{
                                marginLeft: 2.5,
                                marginTop: 1,
                                marginBottom: 1,
                            }}>
                                <Typography variant='subtitle1' sx= {{ textAlign: 'center' }}>Your answer has been recorded. Please enter submit button to review your score.</Typography>
                                    
                            </Box>
                        </Paper>
                        <Button 
                            variant='contained' 
                            size='large' 
                            sx={{ 
                                backgroundColor: '#153E52',  
                                width: '100%', 
                                marginTop: '10px', 
                                '&:hover': { backgroundColor: '#102f3e' } 
                            }} 
                            onClick={handleSubmitQuiz}
                        >
                            Submit
                        </Button>
                    </>
            }
            
            </React.Fragment>
            )}
        
        
    </Container>
  )
}

export default QuizStart