import React from 'react'
import Footer from '../Footer/Footer'
import Content from '../content/Content'
import Middle from '../middle/Middle'
import Header from '../header/Header'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box sx={{width:'100%', overflow:'hidden'}}>
    <Header/>
    <Middle/>
    <Content/>
    <Footer/>
</Box>
  )
}

export default Home