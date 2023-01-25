import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react';
import Table from '@mui/material/Table';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import { Stack } from '@mui/system';

function createData(event, date) {
  return {event, date};
}

const events = [
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 August 2022'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 September 2022'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 February 2022'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 November 2022'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 January 2022'),
  createData('Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '30 June 2022'),
]

const Notification = () => {
  return (
    <Paper sx={{ padding: '5px', borderRadius: '10px'}}>
      <TableContainer>
        <Table sx={{ minWidth: 200 }} aria-label="News and Notification Tab">
          <TableHead>
            <TableRow>
              <TableCell>
                <Stack direction='row' spacing={2}>
                  <FeedRoundedIcon style={{ color: '#F39223', fontSize: 25}} />
                  <Typography color='#F39223'>Latest News and Events</Typography>
                </Stack>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              events.map((item, index) => (
                <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#d9e6f2' } }}>
                  <TableCell>
                    <Stack direction='row' spacing={2}>
                      <Typography color='#153E52' variant='title'>
                      {item.event}
                      <Typography color='#F39223' marginY='2px' variant='p' fontStyle='italic'> {item.date}</Typography>
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>











    // <Paper sx={{ padding: "5px"}} elevation={4}>
    // <Box sx={{
    //     bgcolor: 'lightpink',
    //     flex: '1',
    //     padding: '10px',
    //     display : {
    //         xs: 'none',
    //         sm: 'block',
    //     }
    // }}>
    //     Notification Bar
    // </Box>
    // </Paper>
  )
}

export default Notification