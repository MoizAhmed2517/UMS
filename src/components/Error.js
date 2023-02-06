import { backdropClasses, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const text = 'ERROR 404 :('

const Error = () => {
  return (
    <Box sx={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }}>
        
        <Typography variant='h1' 
            sx={{ 
                textAlign: 'center', 
                color: '#153E52', 
            }}>
                {text}
        </Typography>
    </Box>
  )
}

export default Error