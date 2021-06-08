import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

import dataCardStyles from './styles';

const DataCard = (props) => {
  const classes = dataCardStyles();

  return (
    <>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {props.info}
          </Typography>
          <Typography variant='h5' component='h2'>
            {props.heading}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            {props.subheading}
          </Typography>
          <Typography variant='body2' component='p'>
            {props.body}
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button size='medium' variant='outlined' onClick={props.action}>
            {props.button}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default DataCard;
