import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Grid,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import {
  CloudUpload,
  ArrowForwardIos,
  ArrowBackIos,
  Cancel,
  FindInPage,
} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  frameGrid: {
    display: 'flex',
    justifyContent: 'center',
    width: 600,
    [theme.breakpoints.down('lg')]: {
      width: 500,
    },
    [theme.breakpoints.down('xs')]: {
      width: 200,
    },
  },
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '121%',
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

const PdfUploader = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [pdfs, setPdfs] = React.useState([]);
  const [pdfsURLs, setPdfsURLs] = React.useState([]);
  const [currentPDF, setCurrentPDF] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   console.log('PDF file object', pdfs[0].name);
  //   console.log('PDF file URL', pdfsURLs);

  return (
    <div>
      <TextField
        fullWidth
        label='Upload PDF'
        variant='outlined'
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position='start'>
              <input
                type='file'
                multiple
                accept='application/pdf'
                onChange={(event) => {
                  // Pushing image objects to an array in state
                  setPdfs(pdfs.concat(Array.from(event.target.files)));

                  // Pushing URL of images to an array in state
                  Object.keys(event.target.files).map((key, value) => {
                    setPdfsURLs((pdfsURLs) => [
                      ...pdfsURLs,
                      URL.createObjectURL(event.target.files[key]),
                    ]);
                  });
                }}
              />
            </InputAdornment>
          ),
        }}
      />
      {pdfs.length !== 0 && (
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
                onClick={handleOpen}
                style={{ marginRight: 16 }}
                startIcon={<FindInPage />}
              >
                Preview
              </Button>
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

      {/* Modal */}
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
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
                xs={12}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    onClick={() => {
                      let updatedArray = pdfsURLs.filter(
                        (e, i) => i !== currentPDF
                      );
                      setPdfsURLs((pdfsURLs) => [...updatedArray]);

                      updatedArray = pdfs.filter((e, i) => i !== currentPDF);
                      setPdfs((pdfs) => [...updatedArray]);

                      currentPDF !== 0
                        ? setCurrentPDF(currentPDF - 1)
                        : setOpen(false);
                    }}
                    startIcon={<Cancel />}
                    variant='outlined'
                  >
                    Remove
                  </Button>
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
                    currentPDF === 0
                      ? setCurrentPDF(pdfsURLs.length - 1)
                      : setCurrentPDF(currentPDF - 1);
                  }}
                >
                  <ArrowBackIos />
                </IconButton>
              </Grid>
              <Grid item xs={8} className={classes.frameGrid}>
                <div className={classes.wrapper}>
                  <iframe
                    src={pdfsURLs[currentPDF]}
                    className={classes.iframe}
                  ></iframe>
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
                    currentPDF === pdfsURLs.length - 1
                      ? setCurrentPDF(0)
                      : setCurrentPDF(currentPDF + 1);
                  }}
                >
                  <ArrowForwardIos />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PdfUploader;
