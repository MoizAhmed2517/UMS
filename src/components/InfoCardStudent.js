import React, {useState} from 'react';
import { Box, Paper, Typography, Stack, Grid, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Image from '../static/images/banner/profileBanner.jpg';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { styled } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import ModalStudent from './ModalStudent';
import DownloadIcon from '@mui/icons-material/Download';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function createData( name, descr, talks, pnum, location, org, year, portfolio ) {
  return { name, descr, talks, pnum, location, org, year, portfolio };
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

const InfoCardStudent = (props) => {
  const rows = [
    createData(props.studentName, props.studentProfile.slice(0,110), props.studentTalks, props.studentPNum, props.studentLocation, props.studentDept, props.studentSemester, props.studentPortfolio),
  ];

  const [openEdit, setOpenEdit] = useState(false);
  const [selectRow, setSelectedRow] = useState(rows);
  const handleOpenModalEdit = (row) => {
    setOpenEdit(true);
    setSelectedRow(row);
  }

  const handleCloseModalEdit = () => setOpenEdit(false);

  const handlePortfolio = () => {
    window.open(props.studentPortfolio, '_blank');
  }

  const rowes = [];
  for (const key in props.allDataAPI.kpi_values) {
    if (props.allDataAPI.kpi_values.hasOwnProperty(key)) {
      const row = [
        { text: key, bold: true },
        { text: `Affective: ${Math.round(((props.allDataAPI.kpi_values[key]["affective"]) + Number.EPSILON) * 100) / 100}, cognitive: ${Math.round(((props.allDataAPI.kpi_values[key]["cognitive"]) + Number.EPSILON) * 100) / 100}, psychometric: ${Math.round(((props.allDataAPI.kpi_values[key]["psychometric"]) + Number.EPSILON) * 100) / 100}` }
      ];
      rowes.push(row);
    }
  }

  const handlePdf = () => {
    const documentDefinition = {
      content: [
        { text: props.allDataAPI.name, style: 'header', alignment: 'center' },

        { text: 'Skills: ', style: 'subheader', marginTop: 10 },
        { text: props.allDataAPI.skills.map((item) => {
            return item.name + ', '
        }), marginLeft: 40, marginTop: -16 },
        
        { text: 'Experience: ', style: 'subheader', marginTop: 10 },
        { text: props.allDataAPI.experience.map(item => {
            return 'Company: ' +  item.name + ', Position: ' + item.position + '\n'
        }), marginTop: 5 },

        { text: 'Freelancing: ', style: 'subheader', marginTop: 10 },
        { text: props.allDataAPI.experience.map(item => {
          return 'Freelancer: ' +  item.name + ', Rating: ' + item.position + '\n'
      }), marginTop: 5},

      { text: 'OBE KPIs - SKill Wise (Top 3): ', style: 'subheader', marginTop: 10 },
      {
        style: "table",
        table: {
          headerRows: 1,
          widths: ["*", "*"],
          body: [
            [{ text: "KPI Name", bold: true }, { text: "OBE KPIs", bold: true }],
            ...rowes
          ]
        }
      }
      
      ],
      styles: {
        header: {
          fontSize: 25,
          bold: true,
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        table: {
          margin: [0, 5, 0, 15]
        },
      }
    };
    pdfMake.createPdf(documentDefinition).download();
  }

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
              {
                props.displayStatus !== 'search' && (
                  <Button variant="text" onClick={() => handleOpenModalEdit(rows)}>
                    <CreateOutlinedIcon sx={{ height: 25, width: 25, color: '#153E52' }} />
                  </Button>
                )
              }
              <ModalStudent openModal={openEdit} handleClose={handleCloseModalEdit} setOpenState={setOpenEdit} skill={selectRow} id={props.userId}/>
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
                  <StyledButton variant="outlined" onClick={handlePortfolio} >Portfolio</StyledButton>
                  <StyledButton variant="outlined" endIcon={<DownloadIcon />} onClick={handlePdf}>Download Profile</StyledButton>
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