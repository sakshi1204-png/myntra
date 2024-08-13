import React from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, CardMedia, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: 300,
        width: '100%',
    },
    details: {
        padding: '16px',
    },
    button: {
        marginTop: '16px',
    },
});

const List = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card className={classes.card}>
                        <CardMedia
                            component="img"
                            alt="Louis Philippe Sport Men White & Grey T-Shirt"
                            height="300"
                            image="https://via.placeholder.com/300x300.png?text=T-Shirt"
                            title="Louis Philippe Sport Men White & Grey T-Shirt"
                            className={classes.media}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.details}>
                        <Typography variant="h4" gutterBottom>
                            Louis Philippe Sport Men White & Grey Brand Logo Printed Slim Fit T-Shirt
                        </Typography>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                            Price: $49.99
                        </Typography>
                        <Typography variant="body1" paragraph>
                            This Louis Philippe Sport T-shirt is designed for style and comfort. Made with high-quality materials,
                            it features a brand logo print and a slim fit.
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Add to Cart
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default List;
