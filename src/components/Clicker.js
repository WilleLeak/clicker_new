import React from 'react'
import { Stack, Typography } from '@mui/material'

const Clicker = () => {

  return (
    <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center', height: '100vh'}}>
        <Stack
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'>
            <Typography variant='h1'>
                yarn
            </Typography>

            <Typography variant='h4'>
                test
            </Typography>

        </Stack>
    </div>
  )
}

export default Clicker