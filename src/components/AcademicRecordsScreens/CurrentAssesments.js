import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(course, courseCode, courseType, examiner, totalMark, obtainedMarks, passingMarks) {
    return { course, courseCode, courseType, examiner, totalMark, obtainedMarks, passingMarks };
  }
  
const rows = [
    createData('Big Data Analyst', 'SWE419T-287', 'Elective', 'Khalid Mehboob', 150, 75, 50),
    createData('JavaScript', 'SWE-A421-432', 'Advance', 'XYZ', 30, 20, 10),
    createData('Software Architecture', 'SWE419T-287', 'Elective', 'Khalid Mehboob', 150, 75, 50),
    createData('Operating System', 'SWE419T-287', 'Elective', 'Khalid Mehboob', 150, 75, 50),
    createData('Data & Algorithms', 'SWE419T-287', 'Elective', 'Khalid Mehboob', 150, 75, 50),
    createData('Data Pipeline Architecture', 'SWE419T-287', 'Elective', 'Khalid Mehboob', 150, 75, 50),
    createData('Big Data Analyst', 'SWE419T-287', 'Elective', 'Khalid Mehboob', 150, 75, 50),
    createData('Web Languages', 'SWE-A421-432', 'Advance', 'XYZ', 30, 20, 10),
    createData('Basic Programming', 'SWE419T-287', 'Elective', 'Khalid Mehboob', 150, 75, 50),
    createData('Business Communication & Ethics', 'SWE419T-287', 'Elective', 'Khalid Mehboob', 150, 75, 50),
    createData('Python-OOP', 'SWE-A421-432', 'Advance', 'XYZ', 30, 20, 10),
];

const CurrentAssesments = (props) => {
  
  const rows = [];
  props.courseDataCC && props.courseDataCC.map((data) => {
    rows.push(createData(data[0], data[1], data[2], data[5], data[6], data[8], data[7]))
  })

  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <TableContainer sx={{ maxHeight: 240, marginBottom: '5px'}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>Course</TableCell>
                        <TableCell align="center">Course Code</TableCell>
                        <TableCell align="center">Course Type</TableCell>
                        <TableCell align="center">Examiner</TableCell>
                        <TableCell align="center">Total Marks</TableCell>
                        <TableCell align="center">Obtained Marks</TableCell>
                        <TableCell align="center">Passing Marks</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.course}</TableCell>
                            <TableCell align="center">{row.courseCode}</TableCell>
                            <TableCell align="center">{row.courseType}</TableCell>
                            <TableCell align="center">{row.examiner}</TableCell>
                            <TableCell align="center">{row.totalMark}</TableCell>
                            <TableCell align="center">{row.obtainedMarks}</TableCell>
                            <TableCell align="center">{row.passingMarks}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default CurrentAssesments