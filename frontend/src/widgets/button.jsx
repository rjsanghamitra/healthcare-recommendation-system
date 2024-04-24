import React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';

const CustomButton = ({ text }) => {
    const isNonMobileScreen = useMediaQuery("(min-width:800px)")
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            left: isNonMobileScreen ? "55rem" : "7rem",
        }}>
            <Button variant="contained"
                sx={{
                    backgroundColor: '#1A4D2E',
                    '&:active': {
                        backgroundColor: '#4F6F52'
                    },
                    '&:focus': {
                        backgroundColor: '#4F6F52'
                    }, 
                    '&:hover': {
                        backgroundColor: '#4F6F52'
                    }
            }}>{text}</Button>
        </Box>
    )
}

export default CustomButton;