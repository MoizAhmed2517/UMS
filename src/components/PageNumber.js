import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PageNumber = (props) => {
  return (
    <Stack spacing={2}>
        <Pagination 
          count={props.totalPostCount} 
          variant="outlined" 
          color="primary" 
          shape="rounded"
          onChange={props.handleCurrentPage}
        />
    </Stack>
  )
}

export default PageNumber