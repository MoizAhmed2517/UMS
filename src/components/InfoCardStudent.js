import React, {useState} from 'react';
import { Box, Paper, Typography, Stack, Grid, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Image from '../static/images/banner/1.png';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { styled } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import TeacherModel from './TeacherModel';
import TechnicalRecords from './TechnicalRecords/TechnicalRecords';
import { Link } from 'react-router-dom';
import ModalStudent from './ModalStudent';

function createData( name, descr, talks, pnum, location, org, year ) {
  return { name, descr, talks, pnum, location, org, year };
}

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  color: '#153E52',
  borderColor: '#153E52',
  '&:hover': {
    backgroundColor: '#d9e6f2',
    borderColor: '#153E52',
  },
}))

const experience = [
  {
    org: 'Sir Syed University',
    year: '1998'
  }
]

const InfoCardStudent = (props) => {
  const rows = [
    createData(props.studentName, props.studentProfile.slice(0,126), props.studentTalks, props.studentPNum, props.studentLocation, props.studentDept, props.studentSemester),
  ];

  const [openEdit, setOpenEdit] = useState(false);
  const [selectRow, setSelectedRow] = useState(rows);
  // const [text, setText] = useState(0);
  const handleOpenModalEdit = (row) => {
    setOpenEdit(true);
    setSelectedRow(row);
  }
  const handleCloseModalEdit = () => setOpenEdit(false);

  return (
    <Paper sx={{padding: "5px", borderRadius: '10px', height: '425px'}} elevation={6}>
      
      <Box sx={{
        backgroundImage: `url(${Image})`,
        flex: '2',
        p: '10px',
        height: '150px',
        borderRadius: '10px',
      }}/>

      <Box sx={{
        bgcolor: 'white',
        flex: '2',
        p: '10px',
        height: '150px',
      }}>
          <Stack direction='row'>
            <Avatar 
            sx={{
              width: 150,
              height: 150,
              marginTop: "-120px",
              marginX: "10px",
              border: "3px solid white",
              bgcolor: '#d9e6f2',
            }}
            alt="Remy Sharp">
            </Avatar>

            <Avatar sx={{
              bgcolor: "#fff",
              '&:hover': { backgroundColor: '#d9e6f2' },
              marginLeft: 'auto',
            }}>
              <Button variant="text" onClick={() => handleOpenModalEdit(rows)}>
                <CreateOutlinedIcon sx={{ height: 25, width: 25, color: '#153E52' }} />
              </Button>
              <ModalStudent openModal={openEdit} handleClose={handleCloseModalEdit} setOpenState={setOpenEdit} skill={selectRow} />
            </Avatar>
            
          </Stack>

          <Grid container spacing={1} marginTop='3px'>

            <Grid item xs={8}>
              <Box sx={{
                marginLeft: '15px',
              }}>

                {rows.map((row, index) => (
                  <Stack direction='column' key={index}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{row.name}</Typography>
                    <Typography variant='title' sx={{ color: 'gray' }}>{row.descr}</Typography>
                    <Typography variant='title' sx={{ color: 'gray', fontSize: 13, marginTop: 1 }}>
                      {`Talks about: ${
                      row.talks.split(",").slice(0, 3).map((talk) => (
                        '#'+talk
                      )).join(" ") }`
                      }
                    </Typography>
                    <Typography variant='p' sx={{ color: 'gray', fontSize: 12, marginTop: 1 }}>{row.pnum}</Typography>
                    <Typography variant='p' sx={{ color: 'gray', fontSize: 12 }}>{row.location}</Typography>
                  </Stack>
                ))
                }

                <Stack direction='row' spacing={1} marginTop='10px'>
                  <StyledButton variant="outlined" component={Link} to='/Technical-Records'>Projects</StyledButton>
                </Stack>

              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box sx={{
                  marginTop: '12px',
                }}>

                  {
                    rows.map((text, index) => (
                      <React.Fragment key={index}>
                        <Stack direction='row' spacing={2}  marginTop={2}>
                          <Avatar sx={{
                            height: 35,
                            width: 35,
                            bgcolor: '#153E52',
                          }}>
                            <SchoolIcon />
                          </Avatar>
                          <Typography variant="title">{text.org}</Typography>
                        </Stack>

                        <Stack direction='row' spacing={2}>
                          <Typography variant='p' sx={{ color: 'gray', fontSize: 12, marginTop: '-15px', marginLeft: '53px' }} >Semester:
                            <Typography variant='p' sx={{ color: '#153E52', fontSize: 12, marginTop: '-15px', marginLeft: '5px', textDecoration: 'underline'}}>{text.year}</Typography>
                          </Typography>
                      </Stack>
                    </React.Fragment>
                    ))
                  }
              </Box>
            </Grid>
          </Grid>
      </Box>
    </Paper>
  );
}

export default InfoCardStudent;