import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from "../Notification";
import InfoCardStudent from '../InfoCardStudent';
import BarChartCGPA from '../Graphs/BarChartCGPA';
import PieChartstatus from '../Graphs/PieChartstatus';
import TopSkillVisual from '../Graphs/TopSkillVisual';
import Endorsment from '../Endorsment';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import ApplicationSearch from '../ApplicationSearch';


const StudentSearchProfile = () => {
  const locationexist = useLocation()
  const id = locationexist.state?.userId
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
  const [text, setText] = useState("search");

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://18.183.141.57/management/student-detail/${id}/`);
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
          <Grid item xs={8}>
            <Stack direction="column" spacing={4}>
              <InfoCardStudent studentName={name} studentDept={dept} studentProfile={profileDescr} studentTalks={talks} studentPNum={pNum} studentLocation={location} studentSemester={semester} displayStatus={text} />
              <BarChartCGPA studentCGPA={cgpa}/>
              <Stack direction="row"> 
                <Grid item xs={6} sx={{ marginBottom: '10px' }}>
                  <PieChartstatus course_done={courseRem} courseTotal={courseTotals} />
                </Grid>
                <Grid item xs={6} sx={{ marginLeft: '20px',marginBottom: '10px' }}>
                  <TopSkillVisual />
                </Grid>
              </Stack>
              <Endorsment endorsG={endroseGiven} endorsR={endroseRecv} displayStatus={text} userIDSearch={id}/>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <ApplicationSearch userId={id} displayStatus={text} />
            <Notification />
          </Grid>
        </Grid>
        </Container>
      </Box>
  )
}

export default StudentSearchProfile