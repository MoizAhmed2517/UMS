import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import Notification from "../Notification";
import Header from './Header';
import Skills from './Skills';
import Experience from './Experience';
import Freelancing from './Freelancing';
import Projects from './Projects';
import Certificates from './Certificates';
import axios from 'axios';
import { useUserId } from '../groups/useUserId';

const TechnicalRecords = () => {
  const { userId, setUserId } = useUserId();
  const [skills, setSkill] = useState(null);
  const [experience, setExperience] = useState(null);
  const [project, setProject] = useState(null);
  const [certifcate, setCertifcate] = useState(null);
  const [freelance, setFreelance] = useState(null);
  const [link, setLink] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://18.183.141.57/management/student-detail/${userId}/`);
      setSkill(res.data.skills);
      setExperience(res.data.experience);
      setLink(res.data.portfolio);
      setProject(res.data.projects);
      setCertifcate(res.data.certificates);
      setFreelance(res.data.freelancing);
    }
    fetchData();
  }, [])


  return (
    <Box sx={{
      marginBottom: '5px'
    }}>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack direction="column" spacing={4}>
              <Header links={link} />
              <Skills skill={skills} />
              <Experience exp={experience} />
              <Freelancing freelancing={freelance} />
              <Projects projects={project} />
              <Certificates certifcatesData={certifcate} exp2={experience} />
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

export default TechnicalRecords