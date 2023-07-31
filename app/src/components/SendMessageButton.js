import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function SendMessageButton() {
    return (
        <IconButton color="primary" type="submit" variant="contained">
            <ArrowUpwardIcon />
        </IconButton>
    );
}
