import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';

export default function SendMessageButton() {
    return (
        <Tooltip title="Submit your query">
        <IconButton color="primary" type="submit" variant="contained">
            <ArrowUpwardIcon />
        </IconButton>
        </Tooltip>
    );
}
