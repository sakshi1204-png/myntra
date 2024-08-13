import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


const Mine = () => {

  const StickyBox = styled(Box)(({ theme }) => ({
    position: 'fixed',
    right: -85,
    top: '50%',

    transform: 'rotate(270deg)',
    backgroundColor: 'rgb(147,148,163)',
    padding: '5px 10px',
    color: 'white',
  }))
  return (
    <StickyBox sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Typography variant='h6' sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>

        Flat Rs.200 OFF
        <ArrowLeftIcon sx={{ transform: 'rotate(90deg)', fontSize: '40px', marginLeft: '40px' }} />
      </Typography>
    </StickyBox>
  )
}

export default Mine;