import React, { Fragment, useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper, Grid, Stack, Box, Button, IconButton } from '@mui/material';
import axios from 'axios';


// const postedJobs = [
//     {
//         id: 0,
//         JobTitle: 'Trainee Machine  Engineer',
//         Requirements: 'Python | Models | Statistics',
//         CGPA: '3.9',
//         JobDescription: 'A machine learning engineer (ML engineer) is a professional in the field of information technology who specializes in the development of self-contained artificial intelligence (AI) systems that automate the usage of prediction models.'
//     },
//     {
//         id: 1,
//         JobTitle: 'Machine Learning Engineer',
//         Requirements: 'Python | Statistics',
//         CGPA: '3.8',
//         JobDescription: 'A machine learning engineer (ML engineer) is a professional in the field of information technology who specializes in the development of self-contained artificial intelligence (AI) systems that automate the usage of prediction models.'
//     },
//     {
//         id: 2,
//         JobTitle: 'Trainee Machine Learning Engineer',
//         Requirements: 'R | ML Models | Statistics',
//         CGPA: '3.5',
//         JobDescription: 'A machine learning engineer (ML engineer) is a professional in the field of information technology who specializes in the development of self-contained artificial intelligence (AI) systems that automate the usage of prediction models.'
//     },
//     {
//         id: 3,
//         JobTitle: 'Backend Engineer',
//         Requirements: 'Python | Django | Statistics',
//         CGPA: '3.0',
//         JobDescription: 'A machine learning engineer (ML engineer) is a professional in the field of information technology who specializes in the development of self-contained artificial intelligence (AI) systems that automate the usage of prediction models.'
//     }
// ];

function createData(position, cgpa, skills, JobDescription) {
    return {position, cgpa, skills, JobDescription};
}

const JobAccordionSearch = (props) => {
    
    const [dataDisplay, setDataDisplay] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
          const res = await axios.get(`http://18.183.141.57/management/job-list/${props.useId}/`);
          const jobTitle = [];
          const cgpa = [];
          const jobDescription = [];
          const requirements = [];
          const datamap = [];
          res.data.map(job => {
              jobTitle.push(job.position);
              cgpa.push(job.cgpa);
              requirements.push(job.requirements);
              jobDescription.push(job.job_description);
          })
  
          for (let i=0; i<requirements.length; i++) {
              datamap.push(createData(jobTitle[i], cgpa[i], requirements[i], jobDescription[i]));
          }
          setDataDisplay(datamap);
      }
      fetchData();
    }, [])
  
    return (
      <Paper elevation={6} sx={{ borderRadius: '10px'}}>
          <Grid container>
  
              <Grid item xs={9}>
                      <Box sx={{
                          marginLeft: 2.5,
                          marginTop: 1,
                      }}>
                          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Posted Jobs</Typography>
                      </Box>
              </Grid>

              <Grid item xs={12}>
                  {dataDisplay && dataDisplay.map((items, index) => (
                      <Accordion key={index}>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel${index}-content`}
                          id={`panel${index}-header`}
                          >
                              <Typography variant="title" sx={{ width: '40%', flexShrink: 0, color: '#153E52'  }}>{items.position}</Typography>
                              <Typography  variant="subtitle2"  sx={{ color: 'text.secondary', width: '40%', flexShrink: 0  }}>{items.skills}</Typography>
                              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Min. CGPA: {items.cgpa}</Typography>
                          </AccordionSummary>,
                          <AccordionDetails>
                              <Typography variant='p'>{items.JobDescription}</Typography>
                          </AccordionDetails>
                      </Accordion>
                  ))} 
              </Grid>
          </Grid>
          
      </Paper>
    )
}

export default JobAccordionSearch