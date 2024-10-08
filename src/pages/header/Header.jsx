import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Container, IconButton, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from './../../asset/myntra.png'




const Header = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'rgb(245,245,246)',
        marginLeft: '0px',
        // marginRight:'10%',
        width: '0%',
        minWidth: '450px',
        color: 'grey',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'grey',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',

        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
        },
    }));

    const LogoBox = styled(Box)(({ theme }) => ({
        marginRight:'3rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }))

    const InsteadLogo = styled(Box)(({ theme }) => ({
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    }))

    const Rightbox = styled(Box)(({theme})=>({
        display:'flex',position:'absolute',right:'30px',
        [theme.breakpoints.down('sm')]: {
            position:'absolute',
            right:'5px'
        },
    }))

    return (
        <>
            <Box sx={{ flexGrow: 1, position: 'fixed', top: '0px', zIndex: '7', width: '100vw' }}>
                <AppBar sx={{
                    width: '100%',
                    backgroundColor: 'white', color: 'black', height: '80px', justifyContent: 'center', boxShadow: '0px 2px 8px rgb(222, 222, 222)',
                    display: { xs: 'flex', md: 'flex' }
                }} position="static">
                    <Toolbar>
                        <IconButton

                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 1, display: { xs: 'flex', md: 'none' }, }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <LogoBox sx={{ml: '2rem', mt:'7px'}}>

                            <img className='myntralogo' src={logo} alt="" />
                        </LogoBox>
                        <InsteadLogo>
                            <Typography variant='h6' sx={{fontSize:'14px',minWidth:'100px'}}>
                                Men T-Shirt
                            </Typography>
                            <Typography component="p" sx={{fontSize:'8px',color:'grey'}}>
                                140148 items
                            </Typography>
                        </InsteadLogo>

                        <Typography
                            variant="h6" component="div"
                            sx={{
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'arial',
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MEN
                        </Typography>
                        <Typography
                            variant="h6"

                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'arial',
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            WOMEN
                        </Typography>
                        <Typography
                            variant="h6"
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'arial',
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            KIDS
                        </Typography>
                        <Typography
                            variant="h6"
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'arial',
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            HOME & LIVING
                        </Typography>
                        <Typography
                            variant="h6"
                            // noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'arial',
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            BEAUTY
                        </Typography>
                        <Typography
                            variant="h6"
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'arial',
                                fontWeight: 600,
                                fontSize: '12px',
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            STUDIO<sup className='mens'>NEW</sup>
                        </Typography>

                        <Search sx={{ fontSize: '12px', color: 'rgb(147,148,163)', display: { xs: 'none', md: 'flex', } }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase sx={{fontSize:'14px', color: 'rgb(57,56,56)'}}

                                placeholder="Search for products,brands and more......"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Rightbox>
                            <MenuItem sx={{
                                flexDirection: 'column', mr: '1rem',padding:'8px'
                            }}>
                                <PermIdentityIcon sx={{paddingRight:'2px',paddingLeft:'2px',display:{xs:'none',md:'flex'}}}/>
                                <SearchIcon sx={{paddingRight:'2px',paddingLeft:'2px',display:{xs:'flex',md:'none',width:'10%',height:'20%'}}}/>
                                <Typography sx={{ display: { xs: 'none', md: 'flex',fontSize:'10px',fontWeight:'bold' } }}>PROFILE</Typography>
                            </MenuItem>
                            <MenuItem sx={{
                                flexDirection: 'column',padding:'8px', mr: '1rem'
                            }}>
                                <FavoriteBorderIcon sx={{paddingRight:'2px',paddingLeft:'2px'}}/>
                                <Typography sx={{ display: { xs: 'none', md: 'flex',fontSize:'10px',fontWeight:'bold' } }}>WISHLIST</Typography>
                            </MenuItem>
                            <MenuItem sx={{
                                flexDirection: 'column',padding:'8px', mr: '2rem'
                            }} >
                                <WorkOutlineIcon sx={{paddingRight:'2px',paddingLeft:'2px',marginRight:'2px',marginLeft:'2px'}}/>
                                <Typography sx={{ display: { xs: 'none', md: 'flex',fontSize:'10px',fontWeight:'bold' } }}>BAG</Typography>
                            </MenuItem>
                        </Rightbox>
                        </Toolbar>
                </AppBar>
            </Box>
        </>

    )
}

export default Header;

