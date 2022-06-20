
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from './Footer'

function Projects() {
  return (
    <Box sx={{backgroundColor: 'black', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%', flexDirection: 'column', textAlign: 'center'}}>
      <Grid container rowSpacing={2} columnSpacing={2} direction='row' justifyContent='space-evenly' alignItems='stretch'>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{minwidth: 275, backgroundColor: '#18191A', margin: '10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <CardContent>
              <Typography variant='h4' color='white'>
                Pokedex App
              </Typography>
              <Typography variant='p' color='white'>
              Created a Single-page application to display Pokemon from the pokedex.
              </Typography>
            </CardContent>
            <CardActions>
                <Button target='_blank' href='https://github.com/Junkim97/Pokedex' sx={{color: 'white'}}>
                  Github
                </Button>
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{minwidth: 275, backgroundColor: '#18191A', margin: '10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <CardContent>
              <Typography variant='h4' color='white'>
                Explore UBC
              </Typography>
              <Typography variant='p' color='white'>
              Created a full stack web application to display course and classroom information for UBC.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{minwidth: 275, backgroundColor: '#18191A', margin: '10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <CardContent>
              <Typography variant='h4' color='white'>
                Memories App
              </Typography>
              <Typography variant='p' color='white'>
              MERN stack social media app where users can post their memories.
              </Typography>
            </CardContent>
            <CardActions>
                <Button target='_blank' href='https://github.com/Junkim97/memories_app' sx={{color: 'white'}}>
                  Github
                </Button>
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{minwidth: 275, backgroundColor: '#18191A', margin: '10px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <CardContent>
              <Typography variant='h4' color='white'>
                Parking Lot System
              </Typography>
              <Typography variant='p' color='white'>
              Created a parking lot database management system for both customers and employees using php and mySQL.
              </Typography>
            </CardContent>
            <CardActions>
                <Button target='_blank' href='https://github.com/Junkim97/Parking-Lot-Database' sx={{color: 'white'}}>
                  Github
                </Button>
              </CardActions>
          </Card>
        </Grid>

      </Grid>
      <Footer></Footer>

    </Box>
  )
}

export default Projects