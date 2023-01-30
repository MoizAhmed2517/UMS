import { Paper, Box, Stack, Typography, IconButton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TerminalIcon from '@mui/icons-material/Terminal';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalSkill from './ModalSkill';
import ModalSkillEdit from './ModalSkillEdit';

const Skills = (props) => {
  const rows= [];

  props.skill && props.skill.map((row) => {
    rows.push(row.name)
  })

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectRow, setSelectedRow] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleOpenModalEdit = (row, index) => {
    setOpenEdit(true);
    setSelectedRow(row);
    setSelectedIndex(index);
  }
  const handleCloseModalEdit = () => setOpenEdit(false);

  return (
    <Paper sx={{ width: '100%', borderRadius: '10px' }} elevation={8}>
        <Box sx={{
            height: '40px',
            marginBottom: 1,
            backgroundColor: '#153E52'
        }}>
            <Stack direction="row" sx={{ marginLeft: 1.5, paddingTop: 1 }}>
                <TerminalIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Skills</Typography>
                {
                    props.displayStatus !== 'search' && (
                        <IconButton sx={{ color: '#fff', marginLeft: 'auto', marginTop: '-9px', marginRight: '23px' }} onClick={handleOpenModal}>
                            <AddIcon />
                        </IconButton>
                    )
                }  
            </Stack>
        </Box>

        <ModalSkill openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} />

        <TableContainer sx={{ maxHeight: 140, marginBottom: '5px'}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">
                                <Stack direction="row">
                                    <Typography>{row}</Typography>
                                    {
                                        props.displayStatus !== 'search' && (
                                            <IconButton sx={{ color: '#153E52', marginLeft: 'auto', height: 20, width: 20, marginRight: '17px' }} onClick={() => handleOpenModalEdit(row, index)}>
                                                <DeleteIcon sx={{ fontSize: 20 }} />
                                            </IconButton>
                                        )
                                    }                            
                                </Stack>  
                            </TableCell>
                        </TableRow>  
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <ModalSkillEdit openModal={openEdit} handleClose={handleCloseModalEdit} setOpenState={setOpenEdit} skill={selectRow} index={selectedIndex} />
    </Paper>
  )
}

export default Skills