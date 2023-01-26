import React from 'react';
import { Container} from '@mui/system';
import { Box, Stack, Typography, Paper, Grid, Button} from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CongoConfetti from './CongoConfetti';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PieChartSummaryQuiz from './Graphs/PieChartSummaryQuiz';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

let score = 92;

const QuizEnd = () => {

  const navigate = useNavigate();
  const location = useLocation()
  const quizScore = location.state?.result
  console.log(quizScore)

  const handlehomeButton = () => {
    navigate('/Quiz-Overview');
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
                <Typography variant="h6" sx={{ marginLeft: 'auto', paddingRight: '15px'}} >Quiz End!</Typography>
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
            {
                score >= 70 ? (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Stack direction="column">
                            <Typography variant="h4" sx={{ paddingLeft: '100px', color: '#153E52' }}><AutoAwesomeIcon sx={{ color: '#F39223'}} /> Congratulations</Typography>
                            <Typography variant="h6" sx={{ paddingLeft: '40px', marginTop: '10px', color: '#153E52' }}>You have successfully pass the Assessment!</Typography>
                        </Stack>
                        <CongoConfetti />
                    </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Stack direction="column">
                            <Typography variant="h4" sx={{ paddingLeft: '260px', color: '#153E52' }}><SentimentVeryDissatisfiedIcon sx={{ color: 'red'}} /> Oops!</Typography>
                            <Typography variant="h6" sx={{ paddingLeft: '40px', marginTop: '10px', color: '#153E52' }}>You have fail the Assessment! Prepare once again and give it a try</Typography>
                        </Stack>
                    </div>
                )
            }

            <Grid container sx={{ marginTop: '10px' }}>
                <Grid item xs={12}>
                    <Box sx={{
                        marginTop: '5px',
                        width: '100%',
                        height: 'auto',
                        paddingBottom: '10px',
                        backgroundColor: 'rgb( 21, 62, 82)',
                        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37)',
                        backdropfilter: 'blur( 15px )',
                        borderRadius: '10px',
                        border: '1px solid rgba( 255, 255, 255, 0.18 )',
                        color: '#fff',
                        transition: 'transform .2s',
                        '&:hover': {
                            boxShadow: '20px 8px 32px 5px rgba( 31, 38, 135, 0.37 )',
                            backdropfilter: 'blur( 50px )',
                            border: '1px solid rgba( 255, 255, 255, 0.18 )',
                            transform: 'scale(0.99)',
                        },
                    }}>
                        <Stack direction="column">
                            <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>Assessment Summary</Typography>
                            <Stack direction="row">
                                <Grid container>
                                    <Grid item xs={5}>
                                        <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>0</Typography>
                                        <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'center' }}>Correct Answer</Typography>
                                        <Typography variant="h1" sx={{ display: 'flex', justifyContent: 'center', color: '#F39223'}}><SentimentSatisfiedAltIcon /></Typography>      
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h1" sx={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>|</Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>0</Typography>
                                        <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'center' }}>Wrong Answer</Typography>
                                        <Typography variant="h1" sx={{ display: 'flex', justifyContent: 'center', color: '#F39223' }}><SentimentVeryDissatisfiedIcon /></Typography>
                                    </Grid>
                                </Grid>
                            </Stack>
                            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>Your Score</Typography>
                            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>{`${score}%`}</Typography>
                        </Stack>  
                    </Box>
                </Grid>

                {/* <Grid item xs={6}>
                    <PieChartSummaryQuiz />
                </Grid> */}
            </Grid>
        </Box>
        <Button variant="contained" sx={{ backgroundColor: '#153E52',  width: '100%', marginTop: '10px', '&:hover': { backgroundColor: '#102f3e' } }} onClick={handlehomeButton}>Take New Assessment</Button>
    </Container>
  )
}

export default QuizEnd