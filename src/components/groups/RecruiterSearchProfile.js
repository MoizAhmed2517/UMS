import React, { useState, useEffect } from 'react'
import InfoCardRecruiter from '../InfoCardRecruiter';
import { Box, Paper, Typography, Stack, Grid, Button } from '@mui/material';
import { Container } from '@mui/system';
import JobAccordionSearch from '../JobAccordionSearch';
import axios from 'axios';
import { useLocation } from 'react-router';
import Error from '../Error';

const RecruiterSearchProfile = () => {
    const locationexist = useLocation();
    const id = locationexist.state?.userId
    const type = locationexist.state?.type
  
    const [error404, setError404] = useState(false);
    const [recruiterId, setRecruiterId] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [lookingFor, setLookingFor] = useState([]);
    const [contact, setContact] = useState("");
    const [location, setLocation] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [email, setEmail] = useState("");
    const [orgName, setOrgName] = useState("");
    const [working, setWorking] = useState("");
    const [orgDescription, setOrgDescription] = useState("");
    const [orgWeb, setOrgWeb] = useState("");
  
    useEffect(() => {
      async function fetchData() {
          const res = await axios.get(`http://18.183.141.57/management/recruiter-detail/${id}/`);
          const loc = res.data.address + ', ' + res.data.city + ', ' + res.data.country;
          setRecruiterId(res.data.id)
          setName(res.data.name);
          setPosition(res.data.position);
          setLookingFor(res.data.looking_for);
          setContact(res.data.contact);
          setLocation(loc);
          setLinkedin(res.data.linkedin);
          setGithub(res.data.github);
          setEmail(res.data.email);
          setOrgName(res.data.org_name);
          setWorking(res.data.working_since);
          setOrgDescription(res.data.org_description);
          setOrgWeb(res.data.website);
      }
      fetchData();
    }, [])
  
    return (
      <Box>
        {
          error404 ? (
            <Error />
          ) : (
          <Container>
            <Grid container marginTop={1} >
              <Grid item xs={12}>
                <InfoCardRecruiter 
                  recruiterId={recruiterId}
                  name={name}
                  position={position}
                  lookingFor={lookingFor}
                  contact={contact}
                  location={location}
                  linkedin={linkedin}
                  github={github}
                  email={email}
                  orgName={orgName}
                  working={working}
                  orgDescription={orgDescription}
                  orgWeb={orgWeb}
                />
              </Grid>
              <Grid item xs={12} marginTop={2}>
                <JobAccordionSearch useId={id}/>
              </Grid>
            </Grid>
          </Container>
          )
        }
      </Box>
    )
}

export default RecruiterSearchProfile