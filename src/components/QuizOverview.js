import { Box, Typography, Paper, Stack, Tooltip, Icon, ButtonGroup, Button, Avatar, Divider } from '@mui/material';
import { Container} from '@mui/system';
import React, { useState, useEffect } from 'react';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import GppBadIcon from '@mui/icons-material/GppBad'; 
import BadgeCounter from './BadgeCounter';
import logo from '../static/images/avatar/React-icon.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 'auto',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: 'rgba(21, 62, 82, 0.2)',
      borderRadius: '10px',
    },
    width: '20%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#153E52',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
     color: 'inherit',
     backgroundColor: 'rgba(21, 62, 82, 0.1)',
     borderRadius: '10px',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const StyledButton = styled(Button)(({theme}) => ({
    borderRadius: '10px',
    color: '#fff',
    backgroundColor: '#153E52',
    borderColor: '#153E52',
    '&:hover': {
        backgroundColor: '#F39223',
        borderColor: '#F39223',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#F39223',
        borderColor: '#F39223',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(243, 146, 35, 0.9)',
      },
  }));

const QuizOverview = () => {

  const [selected, setSelected] = useState(true);
  const [iconsVal, setIconVal] = useState("NotTaken");
  const [quizData, setQuizData] = useState(null);
  const [quizQuestion, setQuizQuestion] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://18.183.141.57/management/quizes/');
      setQuizData(res.data);
      res.data.map((quiz) => {
        setQuizQuestion(quiz.questions);
      })
    }
    fetchData();
  }, [])

  
  
  return (
    <Container maxWidth="lg" sx={{ marginTop : '20px' }}>

        <Paper sx={{padding: "5px", borderRadius: '10px'}} elevation={8}>
            <Box sx={{
                marginLeft: 2.5,
                marginTop: 1,
                marginBottom: 1,
            }}>
                <Stack direction="row">
                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Skill Assessment</Typography>
                    <Tooltip title="Check your skill level. Answer 15 multiple choice questions, score in the top 30%, and earn a skill badge.">
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
            
            <Stack direction="row">
                
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <StyledButton variant="contained" selected={selected}>All</StyledButton>
                    <StyledButton variant="contained">Recommended</StyledButton>
                    <StyledButton variant="contained">Industry Knowledge</StyledButton>
                    <StyledButton variant="contained">Tools & Technology</StyledButton>
                </ButtonGroup>

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder='Search...'
                        inputProps={{ 'aria-label': 'search' }}
                        fullWidth
                    />
              </Search>
            </Stack>

            <Stack direction="row" sx={{ marginTop: '20px'}}>
                <Box>
                {
                    quizData && quizData.map((quiz, index) => (
                    <div key={quiz.id}>
                        <List sx={{
                            width: '100%',
                            maxWidth: 580,
                            bgcolor: 'background.paper',
                        }}>
                            <ListItem>
                                <ListItemAvatar >
                                    <Avatar alt="React" src={logo} />
                                </ListItemAvatar>
                                <ListItemText primary={
                                    <React.Fragment>
                                        <Stack direction="row">
                                            <Typography variant="title" sx={{ fontWeight: 'bold', color: '#153E52' }} component={Link} to='/Quiz-Start' state={{question: quizQuestion}} >{quiz.name}</Typography>
                                            <Tooltip title={iconsVal} placement="right">
                                                <Box sx={{ marginLeft: '5px', marginTop: '1px'}}>
                                                        {iconsVal === "Badge" ? <LocalPoliceIcon sx={{ fontSize: 16, color: '#F39223'}}/> : <LocalPoliceIcon sx={{ fontSize: 16, color: "gray"}}/>}
                                                        {iconsVal === "Retry" ? <GppBadIcon sx={{ fontSize: 16, color: 'red'}}/> : ""}                
                                                </Box>
                                            </Tooltip>
                                        </Stack>
                                    </React.Fragment>
                                } 
                                secondary={
                                    <div>
                                        <Stack direction="row">
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#F39223' }}>Time:</Typography>
                                            <Typography variant="subtitle2" sx={{ color: '#000', marginLeft: '3px' }}>{`${quiz.time} mins`}</Typography>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#F39223', marginLeft: '20px' }}>Total Questions:</Typography>
                                            <Typography variant="subtitle2" sx={{ color: '#000', marginLeft: '3px' }}>{quiz.questions.length}</Typography>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#F39223', marginLeft: '20px' }}>Level:</Typography>
                                            <Typography variant="subtitle2" sx={{ color: '#000', marginLeft: '3px' }}>{quiz.level}</Typography>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#F39223', marginLeft: '20px' }}>Passing:</Typography>
                                            <Typography variant="subtitle2" sx={{ color: '#000', marginLeft: '3px' }}>21%</Typography>
                                        </Stack>
                                        <Typography variant="caption">Decsription of each text will be display here. ONly 2 line short decription consit of 182 charatcer will be display here............................ </Typography>
                                    </div>
                                } 
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                    </div>
                    ))
                }
                </Box>

                <BadgeCounter />

            </Stack>

        </Paper>
    </Container>
  )
}

export default QuizOverview