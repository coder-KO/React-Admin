import React from 'react';
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
} from '@material-ui/core';
import {
  CloudUpload,
  ArrowForwardIos,
  ArrowBackIos,
  Cancel,
} from '@material-ui/icons/';

const ImageUploader = (props) => {
  const [imageFiles, setImageFiles] = React.useState([]);
  const [imageFilesURLs, setImageFilesURLs] = React.useState([]);
  const [currentImg, setCurrentImg] = React.useState(0);

  return (
    <div>
      <TextField
        fullWidth={props.fullWidth}
        label='Upload Images'
        variant='outlined'
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position='start'>
              <input
                type='file'
                multiple
                accept='image/x-png, image/gif, image/jpeg'
                onChange={(event) => {
                  // Pushing image objects to an array in state
                  setImageFiles(
                    imageFiles.concat(Array.from(event.target.files))
                  );

                  // Pushing URL of images to an array in state
                  Object.keys(event.target.files).map((key, value) => {
                    setImageFilesURLs((imageFilesURLs) => [
                      ...imageFilesURLs,
                      URL.createObjectURL(event.target.files[key]),
                    ]);
                  });
                }}
              />
            </InputAdornment>
          ),
        }}
      />
      {imageFiles.length !== 0 && (
        <React.Fragment>
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Grid
              item
              xs={2}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <IconButton
                onClick={() => {
                  currentImg === 0
                    ? setCurrentImg(imageFilesURLs.length - 1)
                    : setCurrentImg(currentImg - 1);
                }}
              >
                <ArrowBackIos />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={8}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <IconButton
                  onClick={() => {
                    let updatedArray = imageFilesURLs.filter(
                      (e, i) => i !== currentImg
                    );
                    setImageFilesURLs((imageFilesURLs) => [...updatedArray]);

                    updatedArray = imageFiles.filter(
                      (e, i) => i !== currentImg
                    );
                    setImageFiles((imageFiles) => [...updatedArray]);

                    currentImg !== 0 && setCurrentImg(currentImg - 1);
                  }}
                >
                  <Cancel />
                </IconButton>

                <img
                  src={imageFilesURLs[currentImg]}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={2}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <IconButton
                onClick={() => {
                  currentImg === imageFilesURLs.length - 1
                    ? setCurrentImg(0)
                    : setCurrentImg(currentImg + 1);
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: 16,
              }}
            >
              <Button
                variant='contained'
                color='default'
                startIcon={<CloudUpload />}
              >
                Upload
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
};

export default ImageUploader;
