import React from 'react'
import {Stack, Typography, Box} from '@mui/material'

const Store = () => {
  return (
    <div style={{backgroundColor: 'grey'}}>
        <Box
        // style = {{height: '100%'}}
        >
            <Stack direction='column'>
                <Box>
                    Store!
                </Box>
                <Box>
                    <Stack direction='row'>
                        <Box> cats </Box>
                        <Box>  </Box>
                    </Stack>
                </Box>
                
            </Stack>
        </Box>
    </div>
  )
}

export default Store