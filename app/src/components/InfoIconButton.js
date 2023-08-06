// InfoIconButton.js
import React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';

export default function InfoIconButton({ handleOpen }) {
    return (
        <Tooltip title="More information">
        <IconButton onClick={handleOpen} color="primary">
            <InfoIcon />
        </IconButton>
        </Tooltip>
    );
}
