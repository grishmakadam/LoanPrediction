import React from 'react'
import {Typography,Button,Container} from '@mui/material'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <Container sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        height:"100vh"
    }}>
        <Typography variant="h1" color="primary.main">Welcome</Typography>
       <Link to="/check-status"> <Button variant='contained' color="secondary">Check loan status</Button></Link>
    </Container>
  )
}

export default Welcome