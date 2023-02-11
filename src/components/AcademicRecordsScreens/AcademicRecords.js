import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Header from './Header';
import CurrentSemesterCourses from './CurrentSemesterCourses';
import BarChartGPA from '../Graphs/BarChartGPA';
import QuizTable from './QuizTable';
import axios from 'axios';
import { useLocation } from 'react-router';

const AcademicRecords = () => {
  const locationexist = useLocation();
  const id = localStorage.getItem('id');
  const [courses, setCourses] = useState(null);
  const [gpa, setGPA] = useState({});
  const [quiz, setQuiz] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://18.183.141.57/management/student-detail/${id}/`);
      setGPA(res.data.gpa);
      res.data.courses.map((item) => {
        setCourses(item)
      })
      setQuiz(res.data.quizes)
    }
    fetchData();
  }, [])


  return (
    <Box>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack direction="column" spacing={4}>
            <Header />
            <CurrentSemesterCourses courseData={courses} />
            <BarChartGPA studentGPA={gpa} />
            <QuizTable quizData={quiz}/>
          </Stack>
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default AcademicRecords