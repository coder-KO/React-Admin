import React from 'react';
import { Grid, Breadcrumbs, Link, Paper, Typography } from '@material-ui/core';
import Accordian from '../components/DataAccordian';

const Products = () => {
  return (
    <>
      <div style={{ padding: 8, marginBotom: 8 }}>
        {/* Bredcrums */}
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/'>
            Admin
          </Link>
          <Link color='textPrimary' href='/products' aria-current='page'>
            Products
          </Link>
        </Breadcrumbs>
      </div>

      {/* Main */}
      <Grid container spacing={2}>
        {/* Accordian */}
        <Grid item xs={12}>
          <Paper variant='outlined' style={{ padding: 16 }}>
            <Typography variant='h5' gutterBottom>
              Inventory
            </Typography>
            <Accordian />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
