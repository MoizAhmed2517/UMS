import { useState, useEffect } from 'react';
import { Box, Paper, Container, Grid, FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';
import GridView from '../GridView';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import PageNumber from '../PageNumber';

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

function createData(id, name, department, sem, descr, typeAPI) {
  return {id, name, department, sem, descr, typeAPI};
}

function limitString(string='', limiter=0){
  return string.substring(0, limiter);
}

const searchFields = [
  {
    value: 'name',
    label: 'Name'
  },
  {
    value: 'sem',
    label: 'Semester'
  },
  {
    value: 'dept',
    label: 'Department'
  }
];

const StudentSearch = () => {

  const [dataDisplay, setDataDisplay] = useState([]);
  const [userSearchId, setUserSearchId] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://18.183.141.57/management/student-list/');
      let fullNameList = [];
      let sem = [];
      let department = [];
      let descr = [];
      let datamap = [];
      let searchId = [];
      let typeAPI = "student";
      res.data.map((data) => {
        let fullName = data.first_name + ' ' +  data.last_name;
        fullNameList.push(fullName);
        sem.push(data.semester);
        descr.push(data.profile_description);
        department.push(data.department);
        searchId.push(data.id);
      });

      for (let i=0; i<descr.length; i++) {
        datamap.push(createData(searchId[i], fullNameList[i], department[i], sem[i], descr[i], typeAPI));
      }

      setDataDisplay(datamap);
    }
    fetchData();
  }, [])
  
  const [search, setSearch] = useState(dataDisplay);
  const [changeField, setChangeField] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPosts = dataDisplay.slice(firstPostIndex, lastPostIndex);
  const totalPost = Math.ceil(dataDisplay.length/postPerPage);

  const handleCurrentPageDisplay = (e, p) => {
    setCurrentPage(p);
  }

  const handleSearch = (e) => {
    const filtername = e.target.value.toLowerCase();
    console.log(filtername)

    if (changeField === 'dept') {
      const searchedName = dataDisplay.filter(items => items.department.toLowerCase().includes(filtername));
      setSearch(searchedName);
    }
    else if (changeField === 'sem') {
      const searchedName = dataDisplay.filter(items => toString(items.semester).toLowerCase().includes(filtername));
      setSearch(searchedName);
    }
    else if (changeField === 'name') {
      const searchedName = dataDisplay.filter(items => items.name.toLowerCase().includes(filtername));
      setSearch(searchedName);
    }

    if (filtername.length === 0) {
      setSearch([])
    }
  }

  const handleChange = (event) => {
    setChangeField(event.target.value);
  };

  return (
    <Box>
      <Container maxWidth="lg" 
          sx={{
            marginTop : '20px',
          }}
        >
        <Paper sx={{ padding: '5px', borderRadius: '10px', height: '40px'}} elevation={4}>
          <Grid container spacing={1}>

            <Grid item xs={8}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search...'
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={handleSearch}
                  fullWidth
                />
              </Search>
            </Grid>

            <Grid item xs={4}>
              <FormControl fullWidth sx={{ paddingTop: '2px'}}>
                <InputLabel id="fieldSelectSearch" sx={{ marginLeft: '-3px' ,paddingTop: '3px'}}>Search</InputLabel>
                <Select
                  labelId="fieldSelectSearch"
                  id="field-Select-Search"
                  value={changeField}
                  label="Name"
                  onChange={handleChange}
                  sx={{ height: '36px', borderRadius: '10px'}}
                >
                  <MenuItem value='name' sx={{ color: '#153E52' }}>Name</MenuItem>
                  <MenuItem value='sem'>Semester</MenuItem>
                  <MenuItem value='dept'>Department</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>
        </Paper>

        <Grid container spacing={2} marginTop={1}>
            { 
              search.length === 0 ? 
                (currentPosts.map((item) => (
                  <Grid item xs={4} key={item.id}>
                    <GridView studentId={item.id} TeacherFName={item.name} TeacherField={item.department} TeacherDesignation={item.sem} TeacherInfo={limitString(item.descr, 140)} TypeAPI={item.typeAPI} />
                  </Grid>
                ))
                ) : search.length !== 0 ?
                (
                  search.map((item) => (
                    <Grid item xs={4} key={item.id}>
                      <GridView studentId={item.id} TeacherFName={item.name} TeacherField={item.department} TeacherDesignation={item.sem} TeacherInfo={limitString(item.descr, 140)} TypeAPI={item.typeAPI} />
                    </Grid>
                  ))
                ) : null   
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