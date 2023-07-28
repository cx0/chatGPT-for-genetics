import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

export default function SendMessageButton() {
    return (
        <IconButton color="primary" type="submit">
            <SendIcon />
        </IconButton>
    );
}
