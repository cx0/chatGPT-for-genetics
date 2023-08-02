// MessageInput.js
import React from 'react';
import Grid from '@material-ui/core/Grid';
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
            style={{
                position: 'sticky', 
                top: 30, 
                zIndex: 1,
                padding: 10,
                borderRadius: 10,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
            }}
        >
            
            <Grid 
                container 
                spacing={1} 
                justifyContent="center" 
                alignItems="center"
            >
                <Grid>
                <Tooltip title="Reset chat">
                <Grid item xs={"auto"}>
                    <IconButton color="primary" onClick={handleResetChat}>
                        <ReplayIcon />
                    </IconButton>
                </Grid>
                </Tooltip>
                <Grid item xs={"auto"}>
                    <ChatInstructions open={instructionOpen} handleOpen={handleOpen} handleClose={handleClose}/>
                </Grid>
                </Grid>
                <Grid item xs={8}>
                    <MessageAutoComplete setMessage={setMessage}/>
                </Grid>
                <Grid item xs={"auto"}>
                    <SendMessageButton />
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