import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { Link } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.65%',
    width: '100%',
  },
  iframe: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
}));

const VideoUrl = () => {
  const classes = useStyles();
  const [url, setUrl] = React.useState('');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant='outlined'
            label='Video URL'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Link />
                </InputAdornment>
              ),
            }}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          {url !== '' && (
            <div className={classes.wrapper}>
              <iframe
                id='ytplayer'
                type='text/html'
                src={url}
                className={classes.iframe}
              ></iframe>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoUrl;
