import React from 'react'
import {Box} from '@mui/material'

function SideBar() {
  return (
    <Box bgcolor='red' flex={1} p={2} sx={{display:{xs:'none',sm:"block"}}}>
    Side bar
    </Box>
  )
}

export default SideBar
