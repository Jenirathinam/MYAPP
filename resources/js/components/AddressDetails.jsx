import React, { useState } from 'react';
import { 
  Box, TextField, FormControlLabel, 
  FormGroup, Checkbox, Button, 
  Container, MenuItem 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddressDetails = () => {
  
  const [provideAddress, setProvideAddress] = useState(false);
  const [prefill, setPrefill] = useState(false);

const navigate = useNavigate();
  const defaultAddress = {
    street: "221B Baker Street",
    landmark: "Near London Museum",
    country: "USA",
    rent: "2500"
  };

  const [address, setAddress] = useState({
    street: "",
    landmark: "",
    country: "",
    rent: ""
  });

  const handlePrefill = () => {
    if (prefill) {
      setAddress(defaultAddress);
    } else {
      setAddress({ street: "", landmark: "", country: "", rent: "" });
    }
  };

  return (
    <Container>
      <Box
        sx={{
          width: "70%",
          border: "1px solid grey",
          boxShadow: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "20px",
          gap: 2,
          mt: "100px"
        }}
      >
        <TextField label="Disable content" variant="outlined" fullWidth />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={provideAddress}
                onChange={() => setProvideAddress(!provideAddress)}
              />
            }
            label="Provide Address"
          />
        </FormGroup>

        <TextField label="What is your rent" variant="outlined" fullWidth />

        {provideAddress && (
          <>
            <FormGroup sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={prefill}
                    onChange={() => {
                      setPrefill(!prefill);
                      handlePrefill();
                    }}
                  />
                }
                label="Prefill"
              />
            </FormGroup>

            <Box sx={{ width:"90%",display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Street"
                fullWidth
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
              />

              <TextField
                label="Landmark"
                fullWidth
                value={address.landmark}
                onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
              />

              <TextField
                label="Country"
                select
                fullWidth
                value={address.country}
                onChange={(e) => setAddress({ ...address, country: e.target.value })}
              >
                <MenuItem value="Ecuador">Ecuador</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="USA">USA</MenuItem>
              </TextField>

              <TextField
                label="What is your rent *"
                fullWidth
                value={address.rent}
                onChange={(e) => setAddress({ ...address, rent: e.target.value })}
              />
            </Box>
          </>
        )}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            gap: "35px",
            mt: "10px"
          }}
        >
         <Button variant="contained" onClick={() => navigate("/basic-details")}>
        Previous
      </Button>

      <Button variant="contained" onClick={() => navigate("/doc-details")}>
        NEXT
      </Button>
         
        </Box>
      </Box>
    </Container>
  );
};

export default AddressDetails;
