import React from 'react';
import CustomButton from '../widgets/button';
import { Typography, useMediaQuery } from '@mui/material';

const HomePage = () => {
    const isNonMobileScreen = useMediaQuery("(min-width:800px)")
    return (
        <>
            <Typography sx={{
            position: 'absolute',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isNonMobileScreen ? "3rem" : "1.5rem",
            left: isNonMobileScreen ? "33%" : "",
            top: "10rem",
            textAlign: 'center',
            color: '#1A4D2E'
        }}>Hello! How can I help you today?</Typography>
            <CustomButton text={"Symptoms"}/>
        </>
    )
}

export default HomePage;