import React from 'react';
import { Container, TextField, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { Badge, CalendarMonth, CalendarMonthOutlined, Email } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Text = styled(TextField)({
    width: "350px",
    margin: "10px", 
    "& .MuiInputBase-root": {
        padding: "5px",
    },
});

const BasicDetail = () => {
  
    
const navigate = useNavigate();
    return (
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mt:"50px" }}>
            <Box
                width="70%"
                minHeight="30vh"
                border="1px solid grey"
                boxShadow={3}
                p={4}
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                alignItems="flex-start"
            >
                <Text label="First Name" variant="outlined" InputProps={{ endAdornment: <InputAdornment position="end"><Badge /></InputAdornment> }} />
                <Text label="Last Name" variant="outlined" InputProps={{ endAdornment: <InputAdornment position="end"><Badge /></InputAdornment> }} />
                <Text variant="outlined"  type="date" InputProps={{ endAdornment: <InputAdornment position="end"></InputAdornment> }} />
                <Text label="Email" variant="outlined"  sx={{  minWidth: '720px' }} InputProps={{ endAdornment: <InputAdornment position="end"><Email /></InputAdornment> }} />
                <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", mt: 2 }}>
                    <Button variant="contained" onClick={()=>{navigate("/address")}}>Next</Button>
                </Box>
            </Box>

        </Container>
    );
};

export default BasicDetail;
