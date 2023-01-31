import { Paper, Typography, Stack, TableContainer, Table, TableRow, TableHead, TableCell, Grid, IconButton, Icon } from '@mui/material'
import React from 'react';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import QuizIcon from '@mui/icons-material/Quiz';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const icons = [
    {
        icon: <QuizIcon/>,
        tooltip: 'Improve Skills',
        styles: {fontSize: 30, filter: 'drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.5))'},
        path: '/Quiz-Overview'
    },
    {
        icon: <InsertDriveFileIcon/>,
        tooltip: 'Academic Records',
        styles: {fontSize: 30, filter: 'drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.5))'},
        path: '/Academic-Records'
    },
    {
        icon: <AssessmentIcon />,
        tooltip: 'Technical Records',
        styles: {fontSize: 30, filter: 'drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.5))'},
        path: '/Technical-Records'
    },
    {
        icon: <SportsEsportsRoundedIcon />,
        tooltip: 'Extra Activities',
        styles: {fontSize: 30, filter: 'drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.5))'},
        path: '/Extra-Activities'
    },
]

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: '#F39223',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

const Application = (props) => {
  return (
    <Paper sx={{ padding: '5px', borderRadius: '10px', marginBottom: '10px'}}>
        <TableContainer>
            <Table sx={{ minWidth: 200 }} aria-label="News and Notification Tab">
                <TableHead>
                    <TableRow>
                    <TableCell>
                        <Stack direction='row' spacing={2}>
                        <AssignmentTurnedInIcon style={{ color: '#F39223', fontSize: 25}} />
                        <Typography color='#F39223'>Applications</Typography>
                        </Stack>
                    </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
        <Grid container spacing={2}>
            {
                icons.map(( {icon, tooltip, styles, path} , index) => (
                    <Grid item xs={6} marginTop={1} key={index} marginBottom={1}>
                        <Stack direction='column'>
                            <LightTooltip title={tooltip}>
                                <IconButton size='large' color='primary' style={{ color: '#153E52', height: 50, width: 50, marginLeft: 54 }} component={Link} to={path} state={{ userId: props.userId }}> 
                                    <Icon style={{filter: 'drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.5))'}}>{icon}</Icon>
                                </IconButton>
                            </LightTooltip>
                            <Typography variant='title' style={{ color: '#153E52', marginLeft: 24 }}>{tooltip}</Typography>
                        </Stack>
                    </Grid>
                ))
            }     
        </Grid>
    </Paper>
  )
}

export default Application