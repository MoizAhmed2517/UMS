import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

function createData(id, name, dept, sem, cgpa, email, summary) {
    return {id, name, dept, sem, cgpa, email, summary};
}
  
const studentInfo = [
    createData('0014', 'Harris Ali', 'Software', '1st', '3.90', 'harris.ali@gmail.com', 'A proffesional Student with skills in React and Python'),
    createData('0015', 'Harris Ali', 'Software', '8th', '3.87', 'harris.ali@gmail.com', 'A proffesional Student with skills in React and Python'),
    createData('0016', 'Harris Ali', 'Software', '7th', '3.32', 'harris.ali@gmail.com', 'A proffesional Student with skills in React and Python'),
    createData('0017', 'Harris Ali', 'Software', '5th', '3.95', 'harris.ali@gmail.com', 'A proffesional Student with skills in React and Python'),
    createData('0018', 'Harris Ally', 'Software', '6th', '3.24', 'harris.ally@gmail.com', 'A proffesional Student with skills in React and Python'),
    createData('0019', 'Harris Ali', 'Software', '3rd', '3.02', 'harris.ali@gmail.com', 'A proffesional Student with skills in React and Python'),
    createData('0020', 'Harris Ali', 'Software', '2nd', '3.11', 'harris.anwar@gmail.com', 'A proffesional Student with skills in React and Python'),
    createData('0021', 'Haris Adam', 'Software', '5th', '2.71', 'haris.adam@gmail.com', 'A proffesional Student with skills in Python')
];

const columns = [
    { field: "id", headerName: "Student ID", width: 90 },
    { field: "name", headerName: "Full Name", width: 150 },
    { field: "dept", headerName: "Department", width: 150 },
    { field: "sem", headerName: "Semester", width: 90 },
    { field: "cgpa", headerName: "CGPA", width: 90 },
    { field: "email", headerName: "Email ID", width: 150 },
    { field: "view", headerName: "More Info", width: 200 },
];

const rows = studentInfo.map((row) => ({
    id: row.id,
    name: row.name,
    dept: row.dept,
    sem: row.sem,
    cgpa: row.cgpa,
    email: row.email,
    view: row.view
}));

const DataTable = () => {
  return (
    <Paper sx={{ padding: '5px', borderRadius: '10px', height: "450px"}}>
        <DataGrid 
            rows={rows}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />

    </Paper>
  )
}

export default DataTable