

import React from 'react'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import {Box, Container, Stack} from '@mui/material'
import NavBar from './components/NavBar'

function App() {



  return (
    <Box>
      <NavBar/> 

      <Stack direction='row'justifyContent='space-between' alignItems='center'> 
      <SideBar/>
      <Feed/>
      <Rightbar/>
    </Stack>

    </Box>
  )
}

export default App
