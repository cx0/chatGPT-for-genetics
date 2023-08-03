// MessageInput.js
import React from 'react';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SendMessageButton from './SendMessageButton';
import MessageAutoComplete from './MessageInputAutoComplete';
import ChatInstructions from './ChatInstructions';

export default function MessageInput({ setMessage, instructionOpen, handleOpen, handleClose, isLoading, handleResetChat }) {
    return (
        <Grid 
            container 
            direction="column"
            justifyContent="center"
            style={{
                position: 'sticky', 
                top: 30, 
                zIndex: 1,
                padding: 10,
                minHeight: 100,
                borderRadius: 10,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                width: '100%'
            }}
        >
            
            <Grid 
                container 
                spacing={1} 
                justifyContent="center" 
                alignItems="center"
            >
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Tooltip title="Reset chat">
                            <IconButton color="primary" onClick={handleResetChat}>
                                <ReplayIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <ChatInstructions open={instructionOpen} handleOpen={handleOpen} handleClose={handleClose}/>
                    </Grid>
                    <Grid item xs={6} sm={8}>
                        <MessageAutoComplete setMessage={setMessage}/>
                    </Grid>
                    <Grid item>
                        <SendMessageButton />
                    </Grid>
                </Grid>
            </Grid>
            {
                isLoading && 
                <Grid xs={12}>
                    <LinearProgress 
                        style={{
                            top: 10, 
                            borderRadius: 20
                        }}
                    />
                </Grid>
            }
        </Grid>
    );
}