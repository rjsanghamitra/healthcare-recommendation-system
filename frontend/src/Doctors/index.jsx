import { Typography } from "@mui/material";
import React from "react";

const Result = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/result/');
    } catch (error) {
        console.error("failed to send the data: ", error);
    }

    return (
        <Typography>{response}</Typography>
    )
}

export default Result