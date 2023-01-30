import { Paper, Box, Stack, Typography, IconButton } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import ComputerIcon from '@mui/icons-material/Computer';
import ModalProjects from  './ModalProjects';
import ModalProjectEdit from './ModalProjectEdit';

function createData(title, link, descr, topSkill1, topSkill2, topSkill3 ) {
    return { title, link, descr, topSkill1, topSkill2, topSkill3 };
  }

const Projects = (props) => {

  const rows = [];

  props.projects && props.projects.map((item) => {
    rows.push(createData(item.name, 'https://www.youtube.com/', item.discription, item.top_skill, 'Test SKill2', 'Test SKill3'))
  })

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectRow, setSelectedRow] = useState("");
  const [text, setText] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleOpenModalEdit = (row, index, textLength) => {
    setOpenEdit(true);
    setSelectedRow(row);
    setSelectedIndex(index);
    setText(textLength);
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
                <ComputerIcon sx={{ fontSize: 23, color: '#fff' }}/>
                <Typography variant='title' sx={{ fontWeight: 'bold', color: '#fff', marginLeft: '5px' }}>Projects</Typography>
                {
                    props.displayStatus !== 'search' && (
                        <IconButton sx={{ color: '#fff', marginLeft: 'auto', marginTop: '-9px', marginRight: '23px' }} onClick={handleOpenModal}>
                            <AddIcon />
                        </IconButton>
                    )
                }
            </Stack>
        </Box>

        <ModalProjects openModal={open} handleClose={handleCloseModal} setOpenState={setOpen} />

        <TableContainer sx={{ maxHeight: 200, marginBottom: '5px'}}>
            <Table stickyHeader  size="small" aria-label="sticky table">
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">
                                <Stack direction="row">
                                    <Typography sx={{ color: '#000', textDecoration: 'None' }} component='a' href={row.link} target='_blank'>{row.title}</Typography>
                                    {
                                        props.displayStatus !== 'search' && (
                                            <IconButton sx={{ color: '#153E52', marginLeft: 'auto', height: 20, width: 20, marginRight: '17px' }} onClick={() => {handleOpenModalEdit(row, index)}}>
                                                <DeleteIcon sx={{ fontSize: 20 }} />
                                            </IconButton>
                                        )
                                    }
                                </Stack>
                                <Stack direction="column">
                                    <Typography variant="caption" sx={{ color: '#000', fontStyle: 'italic' }}>{row.descr} </Typography>
                                    <Typography variant="caption">{`Top Skill: ${row.topSkill1}`} {`- ${row.topSkill2}`} { typeof(row.topSkill3) !== '' && `- ${row.topSkill3}`}</Typography>
                                </Stack> 
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <ModalProjectEdit openModal={openEdit} handleClose={handleCloseModalEdit} setOpenState={setOpenEdit} skill={selectRow} textLength={text} index={selectedIndex} />
    </Paper>
  )
}

export default Projects