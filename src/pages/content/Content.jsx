import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography, Stack } from '@mui/material'; // Added Stack import
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const Content = () => {
    const route = useNavigate()
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('md')]: {
            padding: '0px'
        },
    }));
    const MyBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        border: '1px solid rgb(197, 195, 195)'
    }));
    const MyBox2 = styled(Box)(({ theme }) => ({
        borderTop: '1px solid rgb(197, 195, 195)',
        borderBottom: '1px solid rgb(197, 195, 195)',
        padding: '1rem',
        [theme.breakpoints.down('md')]: {
            padding: '0rem'
        },
    }));
    const Typo = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            backgroundColor: '',
        },
        [theme.breakpoints.up('md')]: {
            fontWeight: '600',
            padding: '8px'
        }
    }));
    const MyCard = styled(Card)((theme) => ({
        borderRadius: '0px',
    }));
    const MyStack = styled(Stack)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            paddingTop: '80px'
        }
    }));

    const [records, setRecords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                if(data){
                    console.log(data)
                }
                setRecords(data.products);
            } catch (err) {
                console.error('Failed to fetch data', err);
            }
        };

        fetchData();
    }, []);

    return (
        <MyStack direction='row'>
            <MyBox flex={3.5} p={0} sx={{
                position: 'sticky', bottom: '0px', display: 'flex', flexDirection: 'column', color: 'grey', fontSize: '10px'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid rgb(197, 195, 195)' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>CATEGORIES</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px', justifyContent: 'start' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">T-shirts</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Lounge T-shirts</label>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid grey' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>BRAND</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Roadster</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Frisker</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Tommy Hilfiger</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">V-Mart</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">HRX by Hrithik Roshan</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">U.S. Polo Assn.</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">WROGN</label>
                    </Box>       
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">VIMAL JONNY</label>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid grey' }} p={4}>
                    <Typography variant='h6' sx={{ color: 'black', fontSize: '14px', mb: '15px' }}>PRICE</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 137 to Rs. 13853</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 13853 to Rs. 27569</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 27569 to Rs. 41285r</label>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '5px' }}>
                        <input className='chk' type="checkbox" id="myCheckbox" />
                        <label className="lbl" htmlFor="myCheckbox">Rs. 41285 to Rs. 55001</label>
                    </Box>
                </Box>
            </MyBox>
            <MyBox2 flex={20}>
                <Grid container spacing={0} wrap="wrap">
                    {records.map((record) => (
                        <Grid item xs={6} sm={6} md={3} lg={3} key={record.id}>
                            <Item sx={{ boxShadow: '0px 0px 0px white' }}>
                                <MyCard onClick={()=>route(`/product/${record.id}`)} sx={{ overflow: 'hidden', boxShadow: '0px 0px 0px white' }}>
                                    <CardMedia
                                        sx={{ height: 280, width: '80%', backgroundSize: 'cover', backgroundPosition: 'top' }}
                                        image={record.images[0]} // Use the actual image URL from the fetched data
                                        title={record.title} // Use the actual title from the fetched data
                                    />
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                        <Typo>
                                            {record.brand} {/* Use actual brand from the data */}
                                        </Typo>
                                        <Typography sx={{ fontSize: '12px' }} variant="body2" component="p" color="text.secondary" noWrap>
                                            {record.title} {/* Use actual title from the data */}
                                        </Typography>
                                        <Typography sx={{ display: 'flex' }} gap={1}>
                                            <Typography variant="h6" component="p" sx={{ fontSize: '12px' }}>Rs. {record.price}</Typography> {/* Use actual price from the data */}
                                        </Typography>
                                    </CardContent>
                                </MyCard>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </MyBox2>
        </MyStack>
    );
};

export default Content;
