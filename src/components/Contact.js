import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import Footer from './Footer';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mov4sfy', 'template_ya5x2bp', form.current, 'iejfsxLKTTdqISm-D')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box sx={{backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', textAlign: 'center'}}>
      <Box sx={{backgroundColor: '#18191A', borderRadius: '25px'}}>
      <Typography variant='h2' color='white'>Contact Me</Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField name='user_name' variant='outlined' fullWidth label='Name' required sx={{marginTop: '20px', marginBottom: '10px', backgroundColor: 'white'}}></TextField>
        <TextField name='user_email' variant='outlined' fullWidth label='Email' required sx={{marginTop: '5px', marginBottom: '10px', backgroundColor: 'white'}}></TextField>
        <TextField name='message' variant='outlined' fullWidth label='Message' multiline rows={4} required sx={{marginTop: '5px', marginBottom: '10px', backgroundColor: 'white'}}></TextField>
        <Button type='submit' value='send' variant='contained'>Send</Button>
      </form>
      </Box>
      <Footer></Footer>
    </Box>
  )
}

export default Contact