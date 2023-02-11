import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { FormControl, MenuItem, InputLabel, Select, Grid, Typography } from '@mui/material';

function createData(course, courseCode, courseType, semester, totalMarks, obtainedMarks, faculty) {
    return { course, courseCode, courseType, semester, totalMarks, obtainedMarks, faculty };
  }
  
const CurrentSemesterCourses = (props) => {

  const semesters = ['All', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];
  const [dataDisplay, setDataDisplay] = useState([]);
  const [semester, setSemester] = useState(semesters[0].toLocaleLowerCase());
  const rows = [];
  props.courseData && props.courseData.map((data) => {
    rows.push(createData(data[0], data[1], data[2], data[3], data[6], data[8], data[5]));
  })
console.log(props.courseData);

  const handleSemester = (event) => {
    setSemester(event.target.value);
    if (event.target.value === '1st'){
        const filteredData = rows.filter(obj => obj.semester === "1");
        setDataDisplay(filteredData);
    } else if (event.target.value === '2nd') {
        const filteredData = rows.filter(obj => obj.semester === "2");
        setDataDisplay(filteredData);
    } else if (event.target.value === '3rd') {
        const filteredData = rows.filter(obj => obj.semester === "3");
        setDataDisplay(filteredData);
    } else if (event.target.value === '4th') {
        const filteredData = rows.filter(obj => obj.semester === "4");
        setDataDisplay(filteredData);
    } else if (event.target.value === '5th') {
        const filteredData = rows.filter(obj => obj.semester === "5");
        setDataDisplay(filteredData);
    } else if (event.target.value === '6th') {
        const filteredData = rows.filter(obj => obj.semester === "6");
        setDataDisplay(filteredData);
    } else if (event.target.value === '7th') {
        const filteredData = rows.filter(obj => obj.semester === "7");
        setDataDisplay(filteredData);
    } else if (event.target.value === '8th') {
        const filteredData = rows.filter(obj => obj.semester === "8");
        setDataDisplay(filteredData);
    } else {
        setDataDisplay([])
    }
    
  }
    
  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <Box sx={{
            marginTop: 1,
            p: 2
        }}>
            <Grid container>
                <Grid item>
                    <Typography variant='h6' sx={{ marginTop: 1 }}>Course Records</Typography>
                </Grid>
                <Grid item xs={3} sx={{
                    marginLeft: 'auto',
                }}>
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
            </Grid>
            
        </Box>
        <TableContainer sx={{ maxHeight: 240}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell sx={{ fontWeight: 'bold' }}>Course</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Course Code</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Course Type</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Semester</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Faculty</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Marks Obtained</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Total Marks</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        dataDisplay.length === 0 ? (
                            rows.map((row, index) => (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{row.course}</TableCell>
                                    <TableCell align="center">{row.courseCode}</TableCell>
                                    <TableCell align="center">{row.courseType}</TableCell>
                                    <TableCell align="center">{`Semester-${row.semester}`}</TableCell>
                                    <TableCell align="center">{row.faculty}</TableCell>
                                    <TableCell align="center">{row.obtainedMarks}</TableCell>
                                    <TableCell align="center">{row.totalMarks}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            dataDisplay.map((row, index) => (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{row.course}</TableCell>
                                    <TableCell align="center">{row.courseCode}</TableCell>
                                    <TableCell align="center">{row.courseType}</TableCell>
                                    <TableCell align="center">{`Semester-${row.semester}`}</TableCell>
                                    <TableCell align="center">{row.faculty}</TableCell>
                                    <TableCell align="center">{row.obtainedMarks}</TableCell>
                                    <TableCell align="center">{row.totalMarks}</TableCell>
                                </TableRow>
                            ))
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default CurrentSemesterCourses