import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(course, courseCode, courseType, semester, fromDate, faculty) {
    return { course, courseCode, courseType, semester, fromDate, faculty };
  }
  
const CurrentSemesterCourses = (props) => {

  const rows = [];
  props.courseData && props.courseData.map((data) => {
    rows.push(createData(data[0], data[1], data[2], data[3], data[4], data[5]))
  })
    
  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <TableContainer sx={{ maxHeight: 240}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>Course</TableCell>
                        <TableCell align="center">Course Code</TableCell>
                        <TableCell align="center">Course Type</TableCell>
                        <TableCell align="center">Semester</TableCell>
                        <TableCell align="center">Date & Time</TableCell>
                        <TableCell align="center">Faculty</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.course}</TableCell>
                            <TableCell align="center">{row.courseCode}</TableCell>
                            <TableCell align="center">{row.courseType}</TableCell>
                            <TableCell align="center">{`Semester-${row.semester}`}</TableCell>
                            <TableCell align="center">{row.fromDate}</TableCell>
                            <TableCell align="center">{row.faculty}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default CurrentSemesterCourses