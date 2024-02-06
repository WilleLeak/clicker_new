import React from 'react'
import { Stack, Typography } from '@mui/material'

const Misc = () => {
  return (
    <div style={{width: '125vh', height: '30vh', backgroundColor: 'lightgrey'}}>
      <Stack 
      display='column'
      justifyContent='center'
      alignItems='center'>
        <Typography>
            Testing misc
        </Typography>
      </Stack>
    </div>
  )
}

export default Misc