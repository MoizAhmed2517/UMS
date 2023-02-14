import { IconButton, Icon, CircularProgress, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Typography, Stack, Grid, Button, Avatar } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Tesseract from 'tesseract.js';
import Modal from '@mui/material/Modal';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';

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
  const [certificateName, setCertificateName] = useState("");
  const name = localStorage.getItem("name");
  const id = localStorage.getItem("id");
  const date = new Date();
  const [platform, setPlatform] = useState("");
  const [status, setStatus] = useState(false);
  const [verify, setVerify] = useState(false);
  const [notification, setNotification] = useState("");
  // const [notificationDisplay, setNotificationDisplay] = useState(false);

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

  const handleConvertImagetoText = () => {
    var fileNameExt = text.split(".");
    var extension = fileNameExt[fileNameExt.length - 1];
    if (isLoading === true && (extension === "jpg" || extension === "png" || extension === "jpeg")) {
      Tesseract.recognize(
        image,
        "eng",
        { logger: (m) => {
            if(m.status === "recognizing text"){
              setDispProgress(true);
              setProgress(parseInt(m.progress * 100));
            }
          } 
        }
      ).then(({ data: {text} }) => {
        console.log(text)
        setStatus(text.includes("Moiz Ahmed"));

        if (text.includes("Moiz Ahmed")) {
          if (text.includes("ude.my")) {
            setPlatform("Udemy");
            try {
              setCertUrl('https://'+(text.match(/Certificate url: (.*?) /)[1]));
              setCertNum(text.match(/Certificate no: (.*?) /)[1]);
            } catch (error) {
              setCertUrl('https://'+(text.match(/Certificate url: (.*)/)[1]));
              setCertNum(text.match(/Certificate no: (.*)/)[1]);
            }
          }
  
          if (text.includes("coursera")){
            setPlatform("Coursera");
            setCertUrl('https://'+(text.match(/coursera\.org\/verify\/.*/g)[0]));
            setCertNum(text.match(/\/professional-cert\/([A-Z0-9]+)/)[1]);
          }

        }
      })
    } 
    
  }

  const handleSubmitClose = () => {
    props.setOpenState(false);
  }

  const handleChangeName = (e) => {
    setCertificateName(e.target.value);
  }
  
  const handleClear = (event) => {
    if (status) {
      if (certificateName) {
        setVerify(true);
        event.preventDefault();
        const item = {
          platform: platform,
          datetime: date,
          link: cerrtUrl,
          certificate_name: certificateName,
          student_name: name,
          student_id: id,
        }
        axios.post('http://18.183.141.57/management/certificate/', item)
          .then(response => {
            console.log(response.data);
            setNotification(response.data);
            setProgress(0);
            setDispProgress(false);
            setVerify(false);

            setTimeout(() => {
              props.setOpenState(false);
            }, 5000)
            
            // window.location.reload();
          })
          .catch(error => {
            console.log(error);
        });
        // window.location.reload();
      } else {
        alert("Please type certificate name else we cannot verify it")
      }
    } else {
      alert("You are not uploading your certificate! If you are sure that it is valid then it is quite possible that your certifcate image quality is compromised and since we are using OCR technology we cannot recognize poor quality images. Kindly, reupload certificate.")
    }
    
    
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
          <TextField
                margin="normal"
                required
                fullWidth
                type='certName'
                id="certName"
                label="Certificate Name"
                name="certName"
                autoComplete="certName"
                autoFocus
                onChange={handleChangeName}
              />
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
                <input hidden accept=".jpeg,.png,.jpg,application/pdf" multiple type="file" onChange={handleImage}/>
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

          {
            progress !== 100 && (
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
            )
          }
          

          {
            dispProgress && (
              <Stack direction="column">
                {
                  progress !== 100 ? (
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
                  ) : ""
                }

                {
                  progress === 100 && (
                    <Button 
                      color="primary" 
                      size='small' 
                      variant="contained" 
                      sx={{ marginTop: '20px', bgcolor: '#153E52', '&:hover': {  bgcolor: '#113242' } }} 
                      onClick={handleClear}
                    >
                      VERIFY
                    </Button>
                  )
                }

                {
                  verify === true && (
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                        <CircularProgress size="sm" sx={{ height: '30px', width: '30px' }} />
                        <Typography variant='caption' sx={{ marginLeft: '10px', margintop: '5px', fontWeight: 'bold' }}>Verifying ....</Typography>
                      </Box>
                       
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                        <Typography variant='caption' sx={{ marginLeft: '10px', margintop: '5px', fontWeight: 'bold' }}>{notification}</Typography>
                      </Box>
                    </>
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