import { GitHub, LinkedIn } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box sx={{width: '100%', marginTop: 'auto', flex: '0 0 50px', position: 'relative'}}>
      <BottomNavigation sx={{backgroundColor: '#18191A', display: 'flex', justifyContent: 'space-evenly'}}>
      <BottomNavigationAction label='linkedIn' value='linkedIn' target='_blank' href='https://www.linkedin.com/in/jun-hyun-k-743388a5/' icon={<LinkedIn sx={{color: 'white'}}></LinkedIn>}></BottomNavigationAction>
      <BottomNavigationAction label='github' value='github' target='_blank' href='https://github.com/Junkim97' icon={<GitHub sx={{color: 'white'}}></GitHub>}></BottomNavigationAction>
    </BottomNavigation>
    </Box>
    
  )
}

export default Footer