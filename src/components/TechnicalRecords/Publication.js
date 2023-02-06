import { Paper, Box, Stack, Typography, IconButton } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalPublication from './ModalPublication';
import ModalExperienceEdit from './ModalExperienceEdit';
import ModalSkillEdit from './ModalSkillEdit';

function createData(name, doi, pub_date) {
    return { name, doi, pub_date };
  }
  

const Experience = (props) => {

  const rows = []

  props.pub && props.pub.map((item) => {
    rows.push(createData(item.name, item.doi, item.publish_date))
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
                <PostAddIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Publication</Typography>
                {
                    props.displayStatus !== 'search' && (
                        <IconButton sx={{ color: '#fff', marginLeft: 'auto', marginTop: '-9px', marginRight: '23px' }} onClick={handleOpenModal}>
                            <AddIcon />
                        </IconButton>
                    )
                }  
            </Stack>
        </Box>

        <ModalPublication openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} />

        <TableContainer sx={{ maxHeight: 200, marginBottom: '5px'}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">
                                <Stack direction="row">
                                    <Typography>Title: {row.name}</Typography>
                                    {
                                        props.displayStatus !== 'search' && (
                                            <IconButton sx={{ color: '#153E52', marginLeft: 'auto', height: 20, width: 20 }} onClick={() => {handleOpenModalEdit(row, index)}}>
                                                <DeleteIcon sx={{ fontSize: 20 }} />
                                            </IconButton>
                                        )
                                    }
                                </Stack>
                                <Stack direction="column">
                                    <Typography variant="caption">Citation: {row.doi}</Typography>
                                    <Typography variant="caption">{`Publish Date: ${row.pub_date}`}</Typography>
                                </Stack> 
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        {/* <ModalExperienceEdit openModal={openEdit} handleClose={handleCloseModalEdit} setOpenState={setOpenEdit} skill={selectRow} index={selectedIndex} /> */}
        <ModalSkillEdit openModal={openEdit} handleClose={handleCloseModalEdit} setOpenState={setOpenEdit} skill={selectRow} index={selectedIndex} />
    </Paper>
  )
}

export default Experience