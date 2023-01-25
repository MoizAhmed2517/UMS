import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import Divider from '@mui/material/Divider';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ReplayIcon from '@mui/icons-material/Replay';
import { Stack } from '@mui/system';

const BadgeCounter = () => {
  return (
    <Box sx={{
        marginTop: '45px',
        marginLeft: 'auto',
        marginRight: '35px',
        width: '40%',
        height: '200px',
        backgroundColor: 'rgb( 21, 62, 82)',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37)',
        backdropfilter: 'blur( 15px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        color: '#fff',
        transition: 'transform .2s',
        '&:hover': {
            boxShadow: '20px 8px 32px 5px rgba( 31, 38, 135, 0.37 )',
            backdropfilter: 'blur( 50px )',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
            transform: 'scale(0.99)',
        }

    }}>
        <Box sx={{
            p: '20px',
        }}>
            <Stack direction="column">
                <Typography variant="h4" sx={{ display: 'flex', justifyContent: 'center' }}>Your Assessment</Typography>
                <Stack direction="row">
                    <Grid container>
                        <Grid item xs={5}>
                            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>0</Typography>
                            <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'center' }}>Badge</Typography>
                            <Typography variant="h1" sx={{ display: 'flex', justifyContent: 'center' }}><EmojiEventsIcon /></Typography>      
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h1" sx={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>|</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>0</Typography>
                            <Typography variant="subtitle1" sx={{ display: 'flex', justifyContent: 'center' }}>To retake</Typography>
                            <Typography variant="h1" sx={{ display: 'flex', justifyContent: 'center' }}><ReplayIcon /></Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>  

        </Box>
    </Box>
  )
}

export default BadgeCounter
