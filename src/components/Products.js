import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../product-data';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Products() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    products.map(product => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Product key={product.id} product={product}/>
                        </Grid>
                    ))
                }

            </Grid>
        </div>
    );
}