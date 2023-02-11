import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Stack, Typography } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';

function createData(cat, rank, date, totalMarks, obtainedMarks, passingMarks) {
    return { cat, rank, date, totalMarks, obtainedMarks, passingMarks };
  }


const QuizTable = (props) => {

  const rows = [];
  props.quizData && props.quizData.map((item) => {
    rows.push(createData(item[0], "Pass", '20/8/2022', 15, item[1], item[2]));
  })

  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <TableContainer sx={{ maxHeight: 240, marginBottom: '5px'}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell sx={{ fontWeight: 'bold' }}>Quiz Name</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Badge</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Date</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Total Marks</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Obtained Marks</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Passing Marks</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.cat}</TableCell>
                            <TableCell align="center">{row.rank}</TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.totalMarks}</TableCell>
                            <TableCell align="center">{row.passingMarks}</TableCell>
                            <TableCell align="center">{row.obtainedMarks}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

export default QuizTable