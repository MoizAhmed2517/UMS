import { Paper, Box, Stack, Typography, IconButton } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CreateIcon from '@mui/icons-material/Create';
import ModalExperience from './ModalExperience';
import ModalExperienceEdit from './ModalExperienceEdit';

function createData(position, company, type, fromDate, toDate, location) {
    return { position, company, type, fromDate, toDate, location };
  }
  


const Experience = (props) => {

  const rows = []

  props.exp && props.exp.map((item) => {
    rows.push(createData(item.position, item.name, 'Full Time', item.start_date, item.end_date, 'Karachi, Pakistan'))
  })

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectRow, setSelectedRow] = useState({});
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
                <EngineeringIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Expereince</Typography>
                <IconButton sx={{ color: '#fff', marginLeft: 'auto', marginTop: '-9px', marginRight: '23px' }} onClick={handleOpenModal}>
                    <AddIcon />
                </IconButton>
            </Stack>
        </Box>

        <ModalExperience openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} />

        <TableContainer sx={{ maxHeight: 200, marginBottom: '5px'}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">
                                <Stack direction="row">
                                    <Typography>{row.position} {`- ${row.company}`}</Typography> 
                                    <IconButton sx={{ color: '#153E52', marginLeft: 'auto', height: 20, width: 20 }} onClick={() => {handleOpenModalEdit(row, index)}}>
                                        <CreateIcon sx={{ fontSize: 20 }} />
                                    </IconButton>
                                </Stack>
                                <Stack direction="column">
                                    <Typography variant="caption">{row.type}</Typography>
                                    <Typography variant="caption">{`From: ${row.fromDate}`} { !row.toDate ? 'To: Present' : `To: ${row.toDate}` }</Typography>
                                    <Typography variant="caption">{row.location}</Typography>
                                </Stack> 
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <ModalExperienceEdit openModal={openEdit} handleClose={handleCloseModalEdit} setOpenState={setOpenEdit} skill={selectRow} index={selectedIndex} />
    </Paper>
  )
}

export default Experience