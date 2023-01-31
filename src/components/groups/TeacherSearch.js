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

function createData(name, designation, field, descr, typeAPI) {
  return {name, designation, field, descr, typeAPI};
}

function limitString(string='', limiter=0){
  return string.substring(0, limiter);
}

// const dummydata = [
//   createData( 'Ammar Ali', 'Data Analyst', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like C/C++ so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Harris Ali', 'Data Analyst', 3.31, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like R so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Hafiz Muhammad Ali', 'React', 3.32, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like Php so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Waleed Hussain', 'MLOPs', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like flutter so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like Carbon so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Ammar Ahmed', 'React', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like Ruby so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Hafiz Muhammad Ali', 'React', 3.32, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like javascript so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Waleed Hussain', 'MLOPs', 3.94, 'Software Eng.', 'He introduced me to the coding, and he is one of the reason why i like react so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Ali Ahmed', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
//   createData( 'Ali Abbas', 'LOC Analyst', 3.94, 'Computer Sc.', 'He introduced me to the coding, and he is one of the reason why i like python so much. His teaching always motivates student to think outside. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
// ];

const searchFields = [
  {
    value: 'name',
    label: 'Name'
  },
  {
    value: 'field',
    label: 'Field'
  },
  {
    value: 'desg',
    label: 'Designation'
  }
];



const TeacherSearch = () => {

  const [dataDisplay, setDataDisplay] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('http://18.183.141.57/management/teacher-list/');
      let fullNameList = [];
      let field = [];
      let designation = [];
      let descr = [];
      let datamap = [];
      let typeAPI = "teacher";
      res.data.map((data) => {
        let fullName = data.first_name + ' ' +  data.last_name;
        fullNameList.push(fullName);
        field.push(data.Field);
        descr.push(data.profile_description);
        designation.push(data.designation);
      });

      for (let i=0; i<descr.length; i++) {
        datamap.push(createData(fullNameList[i], designation[i], field[i], descr[i]));
      }

      setDataDisplay(datamap);
    }
    fetchData();
  }, [])


  
  const [search, setSearch] = useState(dataDisplay);
  const [changeField, setChangeField] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPosts = dataDisplay.slice(firstPostIndex, lastPostIndex);
  const totalPost = Math.ceil(dataDisplay.length/postPerPage);

  const handleCurrentPageDisplay = (e, p) => {
    setCurrentPage(p);
  }

  const handleSearch = (e) => {
    const filtername = e.target.value.toLowerCase();

    if (changeField === 'desg') {
      const searchedName = dataDisplay.filter(items => items.designation.toLowerCase().includes(filtername));
      setSearch(searchedName);
    }
    else if (changeField === 'skill') {
      const searchedName = dataDisplay.filter(items => items.field.toLowerCase().includes(filtername));
      setSearch(searchedName);
    }
    else if (changeField === 'name') {
      const searchedName = dataDisplay.filter(items => items.name.toLowerCase().includes(filtername));
      setSearch(searchedName);
    }

    if (filtername.length === 0) {
      console.log("ANdar")
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
                  <MenuItem value='field'>Field</MenuItem>
                  <MenuItem value='dept'>Designation</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>
        </Paper>

        <Grid container spacing={2} marginTop={1}>
            { 
              search.length === 0 ? 
                (currentPosts.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <GridView TeacherFName={item.name} TeacherField={item.field} TeacherDesignation={item.designation} TeacherInfo={limitString(item.descr, 140)} TypeAPI={item.typeAPI} />
                  </Grid>
                ))
                ) : search.length !== 0 ?
                (
                  search.map((item, index) => (
                    <Grid item xs={4} key={index}>
                      <GridView TeacherFName={item.name} TeacherField={item.field} TeacherDesignation={item.designation} TeacherInfo={limitString(item.descr, 140)} TypeAPI={item.typeAPI} />
                    </Grid>
                  ))
                  // setSearch([])
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

export default TeacherSearch