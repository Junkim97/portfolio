import { Box, Typography } from '@mui/material'
import React from 'react'
import Typed from 'react-typed'
import Footer from './Footer'

function Home() {
  return (
    <Box sx={{backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', textAlign: 'center'}}>
      <Typography variant='h1' color='white'><Typed strings={["Hi, I'm Jun"]} typeSpeed={40} autoInsertCss={true}></Typed></Typography>
      <Typography variant='h3' color='white'><Typed strings={["Aspiring Software Engineer, and Lifelong Learner"]} startDelay={900} showCursor={false} typeSpeed={40}></Typed></Typography>
      <Footer></Footer>

    </Box>
  )
}

export default Home