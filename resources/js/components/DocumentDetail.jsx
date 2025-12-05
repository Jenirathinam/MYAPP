import React from 'react';
import { Box, TextField, Button, styled, Container } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router-dom';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const DocumentDetail = () => {

  const navigate = useNavigate();
  return (<Container sx={{}}>
    <Box sx={{ width: "800px", height: "25vh", display: "flex", alignItems: "center", justifyContent: "center", mt: "100px", border: "1px solid grey", flexDirection: "column", gap: "10px" }}>
      <TextField sx={{ width: "700px" }} label="Aadhar Number" variant="outlined" />

      <Button sx={{ width: "700px" }}
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload Your Aadhar Card
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
        />
      </Button>
      <Box sx={{ width: "500px", display: "flex", justifyContent: "flex-end", gap: "35px", mt: "10px" }}>
        <Button variant="contained" onClick={() => { navigate("/address") }}>Previous</Button>
        <Button variant="contained " onClick={() => { navigate("/basic-details") }}>Next</Button>
      </Box>

    </Box>
  </Container>
  );
};

export default DocumentDetail;
