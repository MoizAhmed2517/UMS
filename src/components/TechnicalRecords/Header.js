import React from 'react';
import { Paper, Box, Stack, Typography, Button } from '@mui/material';

const Header = (props) => {

  const link = props.links
  const handlePortfolio = () => {
    window.open(link, '_blank');
  }
  return (
    <Paper sx={{padding: "5px", borderRadius: '10px'}} elevation={8}>
        <Box sx={{
            marginLeft: 2.5,
            marginTop: 1,
            marginBottom: 1,
        }}>
            <Stack direction="row">
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#153E52' }}>Technical Records</Typography>
                <Button variant="contained" sx={{ marginLeft: 'auto', marginRight: '10px', backgroundColor: '#153E52', '&:hover': { backgroundColor: '#102f3e' } }} onClick={handlePortfolio}>
                  My Portfolio
                </Button>
            </Stack>
        </Box>
    </Paper>
  );
}

export default Header