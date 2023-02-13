import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from "../Notification";
import Activity from "../Activity";
import CalendarFull from "../CalendarFull";
import InfoCard from '../InfoCard';
import axios from 'axios';
import { useLocation } from 'react-router';
import Experience from '../TechnicalRecords/Experience';
import Publication from '../TechnicalRecords/Publication';

const Teacher = () => {

  const locationexist = useLocation();
  const id = locationexist.state?.userId
  const type = locationexist.state?.type
  const [name, setName] = useState("");
  const [profileDescr, setProfileDescr] = useState("");
  const [talks, setTalks] = useState("");
  const [pNum, setPNum] = useState("");
  const [year, setYear] = useState("");
  const [org, setOrg] = useState("");
  const [exp, setExp] = useState("");
  const [publication, setPublication] = useState("");
  const [location, setLocation] = useState("Karachi, Sindh, Pakistan");

  useEffect(() => {
    if (id !== undefined && type !== undefined) {
      localStorage.setItem('id', id)
      localStorage.setItem('type', type)
    }
  }, [id, type])

  const [userLoginId, setUserLoginId] = useState(localStorage.getItem('id') || id);
  const [userType, setUserType] = useState(localStorage.getItem('type') || type);

  useEffect(() => {
    if (id !== undefined && type !== undefined) {
      localStorage.setItem('id', id)
      localStorage.setItem('type', type)
    }
  }, [id, type])

  function saveData(data) {
    localStorage.setItem('skills', data);
  }

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://18.183.141.57/management/teacher-detail/${userLoginId}/`);
      setName(res.data.first_name);
      setProfileDescr(res.data.profile_description);
      setTalks(res.data.talks_about);
      setPNum(res.data.phone_num);
      setExp(res.data.experience);
      setPublication(res.data.publication);
      res.data.experience.map((item) => {
        setOrg(item.name)
        const date = new Date(item.start_date)
        const year = date.getFullYear();
        setYear(year)
      });
      saveData('all');
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
              <InfoCard name={name} desc={profileDescr} talks={talks} pNum={pNum} year={year} org={org} location={location} />
              <Experience exp={exp} />
              <Publication pub={publication} />
              <Activity />
              <CalendarFull />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Notification />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Teacher