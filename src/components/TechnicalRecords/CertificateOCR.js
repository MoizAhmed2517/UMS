import { IconButton, Icon, CircularProgress, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Tesseract from 'tesseract.js';
import Modal from '@mui/material/Modal';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: '#fff',
    border: '1px solid #153E52',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
  };

const CertificateOCR = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState('');
  const [pdf, setPDF] = useState('');
  const [progress, setProgress] = useState(0);
  const [dispProgress, setDispProgress] = useState(false);
  const [cerrtUrl, setCertUrl] = useState("");
  const [cerrtNum, setCertNum] = useState("");

  const handleImage = (e) => {
    if (e.target.files[0].name.split(".")[1] === "pdf") {
      const file = e.target.files[0];
      
    } else {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
    setText(e.target.files[0].name)
    setIsLoading(true);
    setProgress(0);
    setDispProgress(false);
  }

  const handleResetImage = () => {
    setImage("");
    setText("");
    setIsLoading(false);
    setProgress(0);
    setDispProgress(false);
  }

  const handleClear = () => {
    setProgress(0);
    setDispProgress(false);
  }

  const handleConvertImagetoText = () => {
    var fileNameExt = text.split(".");
    var extension = fileNameExt[fileNameExt.length - 1];
    if (isLoading === true && (extension === "jpg" || extension === "png")) {
      Tesseract.recognize(
        image,
        "eng",
        { logger: (m) => {
            // console.log(m);
            if(m.status === "recognizing text"){
              setDispProgress(true);
              setProgress(parseInt(m.progress * 100));
            }
          } 
        }
      ).then(({ data: {text} }) => {
        setCertUrl(text.match(/Certificate url: (.*?) /)[1]);
        setCertNum(text.match(/Certificate url: (.*?) /)[1]);
      })
    } else if (isLoading === true && extension === 'pdf') {
       
    }
  }

  const handleSubmitClose = () => {
    props.setOpenState(false);
  }

  return (
    <Modal
        open={props.openModal}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style} component="form">

        <Stack>
            <Box sx={{ marginLeft: 'auto' }}> 
                <IconButton onClick={handleSubmitClose} sx={{ '&:hover': { backgroundColor: '#d9e6f2'} }}>
                    <CloseIcon sx={{ color: '#153E52' }}/>
                </IconButton>
            </Box>
        </Stack>
        
        <Stack direction="column" p={2}>
          <Typography variant='h5' align="center" sx={{ color: '#153E52' }}>Upload Your certificate</Typography>
          <Stack direction="row" marginBottom={2} marginTop={2}>

            <Button 
                variant="contained" 
                component="label"
                sx={{
                    bgcolor: '#153E52',
                    '&:hover': {  bgcolor: '#113242' }
                }}
            >
                Upload
                <input hidden accept=".png,.jpg,application/pdf" multiple type="file" onChange={handleImage}/>
            </Button>

            <Box sx={{
              bgcolor: 'white',
              marginLeft: '2px',
              width: '550px',
              pt: '5px',
              borderRadius: '5px',
              border: '1px solid #a6a6a6'
            }}>
              <Typography variant="title">{text}</Typography>
              {
                isLoading && (
                <IconButton sx={{ height: 10, width: 10 }} onClick={handleResetImage}>
                  <CloseIcon sx={{ fontSize: 15 }}/>
                </IconButton>
                )
              }
            </Box>
          </Stack>
          <Button 
            size='small' 
            variant="contained" 
            onClick={handleConvertImagetoText}
            sx={{
                bgcolor: '#153E52',
                '&:hover': {  bgcolor: '#113242' }
            }}
            endIcon={<CloudUploadIcon />}
        >
            Upload
          </Button>
          {
            dispProgress && (
              <Stack direction="column">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                    {progress === 100 ? (
                      <CircularProgress variant="determinate" value={progress} color="success" />
                    ) : (
                      <CircularProgress variant="determinate" value={progress}/>
                    )}

                    <Box sx={{
                      marginTop: '1px',
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Typography variant="caption" component="div" color="text.secondary">{`${progress}%`}</Typography>
                    </Box>
                  </div>
                     {
                      progress === 100 && (
                        <Button color="primary" size='small' variant="contained" sx={{ marginTop: '20px', bgcolor: '#153E52', '&:hover': {  bgcolor: '#113242' } }} onClick={handleClear}>
                          VERIFY
                        </Button>
                      )
                     }
              </Stack>
            )
          }
        </Stack>

        </Box>
    </Modal>
  )
}

export default CertificateOCR