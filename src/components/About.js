import { Avatar, Box, Typography } from '@mui/material'
import profile from './avatar.jpg'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faJsSquare, faHtml5, faCss3, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer'

function About() {
  return (
    <Box sx={{backgroundColor: 'black', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%', flexDirection: 'column', textAlign: 'center'}}>
      <Avatar variant='rounded' alt='My Avatar' src={profile} sx={{width: '25vw', height: 'auto', margin: '20px'}}></Avatar>
      <Typography variant='p' color='white' sx={{margin: '20px'}}>Hello! My name is Jun and I'm a recent computer science graduate from the University of British Columbia and an aspiring software engineer. For as long as I can remember I've always been interested in computers which led me to pursuing a degree in computer science. I love learning and believe in being a life long learner which makes software engineering a very attractive field to me. When I'm not working on projects in my free time I love to travel, take pictures, and hit the slopes for some snowboarding. Here are a few of the technologies that I love working with:</Typography>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', width: '100%'}}>
      <FontAwesomeIcon icon={faReact} inverse size='2x'/>
      <FontAwesomeIcon icon={faJsSquare} inverse size='2x'/>
      <FontAwesomeIcon icon={faHtml5} inverse size='2x'/>
      <FontAwesomeIcon icon={faCss3} inverse size='2x'/>
      <FontAwesomeIcon icon={faNodeJs} inverse size='2x'/>
      </Box>
      <Footer></Footer>
     
    </Box>
  )
}

export default About