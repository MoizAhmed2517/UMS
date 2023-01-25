import React from 'react';
import { Paper, Box, Stack, Typography } from '@mui/material';

const Header = () => {
  return (
    <Paper sx={{padding: "5px", borderRadius: '10px'}} elevation={8}>
        <Box sx={{
            marginLeft: 2.5,
            marginTop: 1,
            marginBottom: 1,
        }}>
            <Stack direction="row">
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#153E52' }}>Co-curricular Activities</Typography>
            </Stack>
        </Box>
    </Paper>
  )
}

export default Header