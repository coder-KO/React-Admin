import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  TextField,
  InputAdornment,
  Typography,
  Breadcrumbs,
  Link,
  Divider,
} from '@material-ui/core';
import NumberFormat from 'react-number-format';

import ImageUploader from '../components/Forms/ImageUploader';
import PdfUploader from '../components/Forms/PdfUploader';
import VideoUrl from '../components/Forms/VideoUrl';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 8,
  },
  formHeading: {
    marginBottom: 16,
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      thousandsGroupStyle='lakh'
      isNumericString
    />
  );
}

const Forms = () => {
  const classes = useStyles();

  const handleImage = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div style={{ padding: 8, marginBotom: 8 }}>
        {/* Bredcrums */}
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/'>
            Admin
          </Link>
          <Link color='textPrimary' href='/forms' aria-current='page'>
            Form
          </Link>
        </Breadcrumbs>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper variant='outlined' className={classes.paper}>
            <Typography
              variant='h5'
              gutterBottom
              className={classes.formHeading}
            >
              Product Form
            </Typography>
            <Divider className={classes.formHeading} />
            <Grid container spacing={2}>
              {/* Product Name */}
              <Grid item xs={12}>
                <TextField fullWidth label='Product Name' variant='outlined' />
              </Grid>

              {/* Product Description */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Product Description'
                  multiline
                  rows={4}
                  variant='outlined'
                />
              </Grid>

              {/* Price */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Product Price'
                  variant='outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>₹ </InputAdornment>
                    ),
                    inputComponent: NumberFormatCustom,
                  }}
                />
              </Grid>

              {/* Product Quantity */}
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label='Product Quantity'
                  variant='outlined'
                  type='number'
                />
              </Grid>

              {/* Discount for Coaches */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Discount for Coaches'
                  variant='outlined'
                  type='number'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>%</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Discount for Players */}
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label='Discount for Players'
                  variant='outlined'
                  type='number'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>%</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper variant='outlined' className={classes.paper}>
            <Typography
              variant='h5'
              gutterBottom
              className={classes.formHeading}
            >
              Uploaders
            </Typography>
            <Divider className={classes.formHeading} />
            <Grid container spacing={2}>
              {/* Image Uploader */}
              <Grid item xs={12}>
                <ImageUploader
                  fullWidth={true}
                  onChange={(e) => handleImage(e)}
                />
              </Grid>

              {/* PDF Uploader */}
              <Grid item xs={12}>
                <PdfUploader />
              </Grid>

              {/* Video URL Uploader */}
              <Grid item xs={12}>
                <VideoUrl />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper variant='outlined'>Form 3</Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper variant='outlined'>Form 4</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Forms;
