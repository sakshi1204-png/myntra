import React, { useEffect, useState } from 'react';
import {
    Box,
    Breadcrumbs,
    CardMedia,
    Grid,
    Typography,
    Button,
    Divider,
} from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import StarIcon from '@mui/icons-material/Star';

const Product = () => {
    const [productData, setProductData] = useState(null);
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProductData(response.data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Box sx={{ marginTop: '100px', marginBottom: '15px', ml: '20px' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/clothing">
                        Clothing
                    </Link>
                    <Link underline="hover" color="inherit" href="/clothing/men">
                        Men Clothing
                    </Link>
                    <Link underline="hover" color="inherit" href="/clothing/men/tshirts" sx={{color:"black"}}>
                        Maniac Tshirts
                    </Link>
                    <Link underline="hover" color="inherit" href={`/product/${id}`}>
                        Men T-Shirt
                    </Link>
                </Breadcrumbs>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around' }}>
                <Box sx={{ flex: 1 }}>
                    <Grid container spacing={2}>
                        {productData?.images?.map((image, index) => (
                            <Grid item key={index} xs={12} sm={6} md={3} lg={3}>
                                <CardMedia
                                    sx={{ height: 500, width: '100%', backgroundSize: 'cover', backgroundPosition: 'top' }}
                                    image={image}
                                    title={productData.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ flex: 1, ml: { md: 2 }, mt: { xs: 2, md: 0 } }}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{productData?.brand}</Typography>
                    <Typography variant='h6' component='p' sx={{ fontWeight: '300', color: 'grey' }}>{productData?.title}</Typography>
                    <Box sx={{ border: '1px solid rgb(224, 219, 219)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', mb: 2 }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '6px', marginRight: '6px' }}>
                            {productData?.rating} <StarIcon sx={{ color: 'rgb(20, 149, 143)', fontSize: '15px', marginBottom: '3px' }} />
                        </Typography>
                        <Box sx={{ width: '1px', border: '1px solid rgb(224, 219, 219)', height: '14px' }}></Box>
                        <Typography sx={{ fontSize: '15px', marginLeft: '6px', marginRight: '6px' }}>
                            {productData?.reviews?.length} Ratings
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>Size</Typography>
                        </Box>
                        <Box>
                        <img src="/img.png" alt="description" />
                        </Box>
                  
                    <Typography variant='h6' component='p'>{productData?.price}</Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: '16px' }}>
                        Add to Cart
                    </Button>
                  
                    <Divider sx={{ marginTop: '20px' }} />
                    <Typography variant="h6" gutterBottom>
                        Reviews
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Product;
