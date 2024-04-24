import React, { useState, useEffect } from "react";
import {Navigate} from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import { Box, FormControlLabel, FormGroup, Typography, useMediaQuery, Button } from "@mui/material";
import axios from 'axios'
import axiosInstance from './csrfConfig.jsx'

const SymptomPage = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    useEffect(() => {
        async function fetchSymptoms() {
            try {
                const response = await axios.get('http://localhost:8000/api/symptoms');
                setSymptoms(response.data.symptoms);
            } catch (error) {
                console.error('Error fetching checklist data:', error);
            }
        }

        fetchSymptoms();
    }, []);

    const handleButtonSubmit = async () => {
        try {
            const apiUrl = 'http://localhost:8000/api/find/';
            const response = await axiosInstance.post(apiUrl, {
                selectedSymptoms,
            });
            <Navigate to='/result' />
        } catch (error) {
            console.error("failed to send the data: ", error);
        }
    }

    const handleCheckboxChange = (option) => (event) => {
        if (event.target.checked) {
            setSelectedSymptoms([...selectedSymptoms, option]);
        } else {
            setSelectedSymptoms(selectedSymptoms.filter((selected) => selected !== option));
        }
        console.log(selectedSymptoms)
    };

    const isNonMobileScreen = useMediaQuery("(min-width:800px)")
    return (
        <>
            <Typography
                sx={{
                    position: 'absolute',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isNonMobileScreen ? "2rem" : "1rem",
                    left: isNonMobileScreen ? "30%" : "1rem",
                    top: "1rem",
                    textAlign: 'center',
                    color: '#1A4D2E'
                }}>
                Select the symptoms from the below given list</Typography>
            <Box
                    sx={{
                        position: 'relative',
                        flexDirection: 'column',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        left: isNonMobileScreen ?'25rem' : '1rem',
                        top: '5rem'
                    }}
                >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingBottom: '1rem'
                }}>
                    <FormGroup>
                        {symptoms.map((option, index) => (
                            <FormControlLabel ke={index}
                                label={<Typography
                                sx={{color: '#1A4D2E', fontSize: '1.5rem'}}
                                >
                                {option}
                                </Typography>}
                                control={<Checkbox
                                    checked={selectedSymptoms.includes(option)}
                                    onChange={handleCheckboxChange(option)}
                                />} />
                        ))}
                    </FormGroup>
                    <Button variant="contained"
                        onClick={handleButtonSubmit}
                        sx={{
                            marginTop: '1rem',
                            left: isNonMobileScreen ? "17rem" : "1rem",
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
                        }} >
                        SUBMIT
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default SymptomPage;