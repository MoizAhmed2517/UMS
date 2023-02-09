import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from "../Notification";
import InfoCardStudent from '../InfoCardStudent';
import Application from '../Application';
import BarChartCGPA from '../Graphs/BarChartCGPA';
import PieChartstatus from '../Graphs/PieChartstatus';
import TopSkillVisual from '../Graphs/TopSkillVisual';
import Endorsment from '../Endorsment';
import axios from 'axios';
import { useLocation } from 'react-router';
import Error from '../Error';

const StudentsProfile = () => {
  const locationexist = useLocation();
  const id = locationexist.state?.userId
  const type = locationexist.state?.type
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [profileDescr, setProfileDescr] = useState("");
  const [talks, setTalks] = useState("");
  const [pNum, setPNum] = useState("");
  const [location, setLocation] = useState("");
  const [semester, setSemester] = useState("");
  const [cgpa, setCGPA] = useState({});
  const [courseTotals, setCourseTotals] = useState(null);
  const [courseRem, setCourseRem] = useState(null);
  const [endroseGiven, setEndroseGiven] = useState(null);
  const [endroseRecv, setEndroseRecv] = useState(null);
  const [portfolio, setPortfolio] = useState("");
  const [error404, setError404] = useState(false);
 
  useEffect(() => {
    if (id !== undefined && type !== undefined) {
      localStorage.setItem('id', id)
      localStorage.setItem('type', type)
      localStorage.setItem('name', name)
    }
  }, [id, type, name])

  const [userLoginId, setUserLoginId] = useState(localStorage.getItem('id') || id);
  const [userType, setUserType] = useState(localStorage.getItem('type') || type);

  useEffect(() => {
    if (id !== undefined && type !== undefined) {
      localStorage.setItem('id', id)
      localStorage.setItem('type', type)
    }
  }, [id, type])

  useEffect(() => {
    async function fetchData() {
      if (userType === "student"){
        const res = await axios.get(`http://18.183.141.57/management/student-detail/${userLoginId}/`);
        setName(res.data.name);
        setDept(res.data.department);
        setProfileDescr(res.data.profile_description);
        setTalks(res.data.talks_about);
        setPNum(res.data.p_num);
        setLocation("Karachi, Pakistan");
        setSemester(res.data.semester);
        setCGPA(res.data.cgpa);
        setCourseTotals(res.data.courses_total);
        setCourseRem(res.data.courses_done);
        setEndroseGiven(res.data.endorsements_given);
        setEndroseRecv(res.data.endorsements_taken);
        setPortfolio(res.data.portfolio);
      } else {
        setError404(true);
      }
      
    }
    fetchData();
  }, [])

  
  return (
      <Box>
        {
          error404 ? (
            <Error />
          ) : (
            <Container maxWidth="lg" 
            sx={{
              marginTop : '20px',
            }}
            >
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Stack direction="column" spacing={4}>
                    <InfoCardStudent studentPortfolio={portfolio} userId={userLoginId} studentName={name} studentDept={dept} studentProfile={profileDescr} studentTalks={talks} studentPNum={pNum} studentLocation={location} studentSemester={semester} />
                    <BarChartCGPA studentCGPA={cgpa}/>
                    <Stack direction="row"> 
                      <Grid item xs={6} sx={{ marginBottom: '10px' }}>
                        <PieChartstatus course_done={courseRem} courseTotal={courseTotals} />
                      </Grid>
                      <Grid item xs={6} sx={{ marginLeft: '20px',marginBottom: '10px' }}>
                        <TopSkillVisual />
                      </Grid>
                    </Stack>
                    <Endorsment endorsG={endroseGiven} endorsR={endroseRecv} />
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Application userId={userLoginId} />
                  <Notification />
                </Grid>
              </Grid>
            </Container>
          )
        }
        
      </Box>
  )
}

export default StudentsProfile