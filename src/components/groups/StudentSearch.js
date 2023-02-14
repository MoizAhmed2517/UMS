import { useState, useEffect } from 'react';
import { Box, Paper, Container, Grid, FormControl, InputLabel, Select, Button } from '@mui/material';
import React from 'react';
import GridView from '../GridView';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import PageNumber from '../PageNumber';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 'auto',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(21, 62, 82, 0.2)',
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

function createData(id, name, department, sem, batch, typeAPI, kpi, skill, exp, gpa) {
  return {id, name, department, sem, batch, typeAPI, kpi, skill, exp, gpa};
}

const StudentSearch = () => {

  const skills = ['Javascript', 'Python', 'HTML', 'React', 'SEO', 'Machine Learning', 'OOP', 'Cyber Security', 'AWS', 'Java', "All"];
  const expereinces = ['All', '0-1 year', '1-2 year', '2-3 year', '3-4 year', '+ 4 year'];
  const batches = ['All', '2020', '2021', '2022', '2023'];
  const semesters = ['All', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
  const cgpas = ['All', '0-0.5', '0.5-1', '1-1.5', '1.5-2', '2-2.5', '2.5-3', '3-3.5', '3.5-4'];
  const departments = ['All', 'Software Engineering', 'Computer Science'];
  const primarySkills = localStorage.getItem('skills');
  const type = localStorage.getItem('type');

  const [dataDisplay, setDataDisplay] = useState([]);
  const [filterDataDisplay, setFilterDataDisplay] = useState([]);
  const [copyDataDisplay, setCopyDataDisplay] = useState([]);
  const [copyDataDisplay2, setCopyDataDisplay2] = useState([]);
  const [skill, setSkill] = useState(primarySkills.split(',')[0].toLocaleLowerCase());
  const [expereince, setExpereince] = useState(expereinces[0].toLocaleLowerCase())
  const [batch, setBatch] = useState(batches[0].toLocaleLowerCase())
  const [semester, setSemester] = useState(semesters[0].toLocaleLowerCase())
  const [cgpa, setCGPA] = useState(cgpas[0].toLocaleLowerCase())
  const [department, setDepartment] = useState(departments[0].toLocaleLowerCase());

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://18.183.141.57/management/kpi/');
      let fullNameList = [];
      let sem = [];
      let department = [];
      let batch = [];
      let datamap = [];
      let searchId = [];
      let typeAPI = "student";
      let KPI = [];
      let gpa = [];
      let skill = [];
      let exp = [];
      res.data.map((data) => {
        fullNameList.push(data.student_name);
        sem.push(data.Semester);
        batch.push(data.batch);
        department.push(data.department);
        searchId.push(data.student_id);
        KPI.push(data.score);
        skill.push(data.skills);
        exp.push(data.experiance);
        gpa.push(data.cgpa);
      });

      for (let i=0; i<batch.length; i++) {
        datamap.push(createData(searchId[i], fullNameList[i], department[i], sem[i], batch[i], typeAPI, KPI[i], skill[i], exp[i], gpa[i]));
      }

      setDataDisplay(datamap);
      setCopyDataDisplay(datamap);
      setCopyDataDisplay2(datamap);
      const filterData = datamap.filter(student => student.skill.some(skills => primarySkills.includes(skills.name)));
      setFilterDataDisplay(filterData);
    }
    fetchData();
  }, [])

  const [viewData, setViewData] = useState(dataDisplay)
  const [search, setSearch] = useState(dataDisplay);
  const [changeField, setChangeField] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPosts = dataDisplay.slice(firstPostIndex, lastPostIndex);
  const totalPost = Math.ceil(dataDisplay.length/postPerPage);

  useEffect(() => {
    setCopyDataDisplay(copyDataDisplay2);
  }, [dataDisplay]);

  const handleCurrentPageDisplay = (e, p) => {
    setCurrentPage(p);
  }

  const handleExperience = (event) => {
    setExpereince(event.target.value);
    if (event.target.value === '0-1 year'){
      const filterData = copyDataDisplay.filter(data => {
        return data.exp >=0 && data.exp <=1;
      })
      setDataDisplay(filterData);
    } else if(event.target.value === '1-2 year'){
      const filterData = copyDataDisplay.filter(data => {
        return data.exp >=1 && data.exp <=2;
      })
      setDataDisplay(filterData);
    } else if(event.target.value === '2-3 year'){
      const filterData = copyDataDisplay.filter(data => {
        return data.exp >=2 && data.exp <=3;
      })
      setDataDisplay(filterData);
    } else if(event.target.value === '3-4 year'){
      const filterData = copyDataDisplay.filter(data => {
        return data.exp >=3 && data.exp <=4;
      })
      setDataDisplay(filterData);
    } else if(event.target.value === '+ 4 year'){
      const filterData = copyDataDisplay.filter(data => {
        return data.exp >=4 ;
      })
      setDataDisplay(filterData);
    } else {
      setDataDisplay(copyDataDisplay2);
    }
  }

  const handleCGPA = (event) => {
    setCGPA(event.target.value);
    if (event.target.value === '0-0.5'){
      const filterData = copyDataDisplay.filter(data => {
        return data.gpa >=0 && data.gpa <=0.5;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '0.5-1'){
      const filterData = copyDataDisplay.filter(data => {
        return data.gpa >=0.5 && data.gpa <=1;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '1-1.5'){
      const filterData = copyDataDisplay.filter(data => {
        return data.gpa >=1 && data.gpa <=1.5;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '1.5-2'){
      const filterData = copyDataDisplay.filter(data => {
        return data.gpa >=1.5 && data.gpa <=2;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '2-2.5'){
      const filterData = copyDataDisplay.filter(data => {
        return data.gpa >=2 && data.gpa <=2.5;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '2.5-3'){
      const filterData = copyDataDisplay.filter(data => {
        return data.gpa >=2.5 && data.gpa <=3;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '3-3.5'){
      const filterData = copyDataDisplay.filter(data => {
        return data.gpa >=3 && data.gpa <=3.5;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '3.5-4'){
      const filterData = copyDataDisplay.filter(data => {
        return data.gpa >=3.5 && data.gpa <=4;
      })
      setDataDisplay(filterData);
    } else {
      setDataDisplay(copyDataDisplay2);
    }
  }

  const handleBatch = (event) => {
    setBatch(event.target.value);
    if (event.target.value === '2020'){
      const filterData = copyDataDisplay.filter(data => {
        return data.batch === 2020;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '2021'){
      const filterData = copyDataDisplay.filter(data => {
        return data.batch === 2021;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '2022'){
      const filterData = copyDataDisplay.filter(data => {
        return data.batch === 2022;
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '2023'){
      const filterData = copyDataDisplay.filter(data => {
        return data.batch === 2023;
      })
      setDataDisplay(filterData);
    } else {
      setDataDisplay(copyDataDisplay2);
    }
  }

  const handleSemester = (event) => {
    setSemester(event.target.value);
    if (event.target.value === '1st'){
      const filterData = copyDataDisplay.filter(data => {
        return data.sem === "1";
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '2nd'){
      const filterData = copyDataDisplay.filter(data => {
        return data.sem === "2";
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '3rd'){
      const filterData = copyDataDisplay.filter(data => {
        return data.sem === "3";
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '4th'){
      const filterData = copyDataDisplay.filter(data => {
        return data.sem === "4";
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '5th'){
      const filterData = copyDataDisplay.filter(data => {
        return data.sem === "5";
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '6th'){
      const filterData = copyDataDisplay.filter(data => {
        return data.sem === "6";
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '7th'){
      const filterData = copyDataDisplay.filter(data => {
        return data.sem === "7";
      })
      setDataDisplay(filterData);
    } else if (event.target.value === '8th'){
      const filterData = copyDataDisplay.filter(data => {
        return data.sem === "8";
      })
      setDataDisplay(filterData);
    } else {
      setDataDisplay(copyDataDisplay2);
    }
  }

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
    if (event.target.value === 'software engineering'){
      const filterData = copyDataDisplay.filter(data => {
        return data.department === 'Software Engineering';
      })
      setDataDisplay(filterData);
    } else if (event.target.value === 'computer science'){
      const filterData = copyDataDisplay.filter(data => {
        return data.department === 'Computer Science';
      })
      setDataDisplay(filterData);
    } else {
      setDataDisplay(copyDataDisplay);
    }
  }

  const handleReset = (event) => {
    setDataDisplay(copyDataDisplay2);
    setExpereince("all");
    setCGPA("all");
    setBatch("all");
    setSemester("all");
    setDepartment("all");
    setSkill(primarySkills.split(',')[0].toLocaleLowerCase());
  }

  const handleSkill = (event) => {
    setSkill(event.target.value);
    if (event.target.value === 'javascript'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("JavaScript");
      })
      setDataDisplay(filteredData);
    } else if (event.target.value === 'python'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("Python");
      })
      setDataDisplay(filteredData);
    } else if (event.target.value === 'html'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("HTML");
      })
      setDataDisplay(filteredData);
    } else if (event.target.value === 'react'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("React");
      })
      setDataDisplay(filteredData);
    } else if (event.target.value === 'seo'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("SEO");
      })
      setDataDisplay(filteredData);
    } else if (event.target.value === 'machine learning'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("Machine Learning");
      })
      setDataDisplay(filteredData);
    } else if (event.target.value === 'oop'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("OOP");
      })
      setDataDisplay(filteredData);
    } else if (event.target.value === 'cyber security'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("Cyber Security");
      })
      setDataDisplay(filteredData);
    } else if (event.target.value === 'aws'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("AWS");
      })
      setDataDisplay(filteredData);
    } else if (event.target.value === 'java'){
      const filteredData = copyDataDisplay.filter(studentSkill => {
        const skills = studentSkill.skill.map(item => item.name);
        return skills.includes("Java");
      })
      setDataDisplay(filteredData);
    } else {
      setDataDisplay(copyDataDisplay2);
    }
  }

  return (
    <Box>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >

        <Paper sx={{ marginTop: 2, p: 2}}>
          <Grid container spacing={1}>

            <Grid item xs={1.71}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Skill</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={skill}
                  label="Skill"
                  onChange={handleSkill}
                >
                  {
                    skills.map((item, index) => (
                      <MenuItem  key={index}  value={item.toLocaleLowerCase()}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={1.71}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-Experience">Experience</InputLabel>
                <Select
                  labelId="demo-simple-select-Experience"
                  id="demo-simple-Experience"
                  value={expereince}
                  label="Experience"
                  onChange={handleExperience}
                >
                  {
                    expereinces.map((item, index) => (
                      <MenuItem  key={index}  value={item.toLocaleLowerCase()}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={1.71}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-Batch">Batch</InputLabel>
                <Select
                  labelId="demo-simple-select-Batch"
                  id="demo-simple-Batch"
                  value={batch}
                  label="Batch"
                  onChange={handleBatch}
                >
                  {
                    batches.map((item, index) => (
                      <MenuItem  key={index}  value={item.toLocaleLowerCase()}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={1.71}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-Semester">Semester</InputLabel>
                <Select
                  labelId="demo-simple-select-Semester"
                  id="demo-simple-Semester"
                  value={semester}
                  label="Semester"
                  onChange={handleSemester}
                >
                  {
                    semesters.map((item, index) => (
                      <MenuItem  key={index}  value={item.toLocaleLowerCase()}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={1.71}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-CGPA">CGPA</InputLabel>
                <Select
                  labelId="demo-simple-select-CGPA"
                  id="demo-simple-CGPA"
                  value={cgpa}
                  label="CGPA"
                  onChange={handleCGPA}
                >
                  {
                    cgpas.map((item, index) => (
                      <MenuItem  key={index}  value={item.toLocaleLowerCase()}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={1.71}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-Department">Department</InputLabel>
                <Select
                  labelId="demo-simple-select-Department"
                  id="demo-simple-Department"
                  value={department}
                  label="Department"
                  onChange={handleDepartment}
                >
                  {
                    departments.map((item, index) => (
                      <MenuItem  key={index}  value={item.toLocaleLowerCase()}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={1.71}>
              <Button
                variant="outlined"
                sx={{
                  height: 56,
                  width: 154
                }}
                endIcon={<RestartAltIcon />}
                size="large"
                onClick={handleReset}
              >
                RESET
              </Button>
            </Grid>

          </Grid>
        </Paper>
        

        <Grid container spacing={2} marginTop={1}>
            { 
              currentPosts.map((item) => (
                  <Grid item xs={4} key={item.id}>
                    <GridView 
                      studentId={item.id} 
                      TeacherFName={item.name} 
                      TeacherField={item.department} 
                      TeacherDesignation={item.sem} 
                      TeacherInfo={item.batch} 
                      TypeAPI={item.typeAPI} 
                      score={item.kpi}
                      exp={item.exp}
                      gpa={item.gpa}
                      skill={item.skill.map((items) => {
                        return items.name
                      })} 
                    />
                  </Grid>
                ))  
            }
        </Grid>

        {
          search.length === 0 && (
            <Grid container spacing={2} marginTop={1}>
              <Grid item xs={12} sx={{ display:'flex', justifyContent: 'right'}}>
                <PageNumber handleCurrentPage={handleCurrentPageDisplay} totalPostCount={totalPost}/>
              </Grid>
            </Grid>
          )
        }
        
      </Container>
    </Box> 
  )
}

export default StudentSearch