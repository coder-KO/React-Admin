import React from 'react';
import { Grid, Breadcrumbs, Link, Paper } from '@material-ui/core';
import DataCard from '../components/DataCard';
import Table from '../components/Table';

const Home = () => {
  return (
    <>
      <div style={{ padding: 8, marginBotom: 8 }}>
        {/* Bredcrums */}
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/'>
            Admin
          </Link>
          <Link color='textPrimary' href='/' aria-current='page'>
            Home
          </Link>
        </Breadcrumbs>
      </div>

      {/* Main */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <DataCard
            info={'Info'}
            heading={'Heading'}
            subheading={'Sub-heading'}
            body={'This is the body of the card'}
            button={'Button'}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DataCard
            info={'Info'}
            heading={'Heading'}
            subheading={'Sub-heading'}
            body={'This is the body of the card'}
            button={'Button'}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DataCard
            info={'Info'}
            heading={'Heading'}
            subheading={'Sub-heading'}
            body={'This is the body of the card'}
            button={'Button'}
          />
        </Grid>

        {/* Accordian */}
        <Grid item xs={12}>
          <Paper variant='outlined' style={{ padding: 16 }}>
            <Table />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
