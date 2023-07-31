// InfoIconButton.js
import React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function InfoIconButton({ handleOpen }) {
    return (
        <IconButton onClick={handleOpen} color="primary">
            <InfoIcon />
        </IconButton>
    );
}
