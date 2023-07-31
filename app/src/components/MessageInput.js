// MessageInput.js
import React from 'react';
import Grid from '@material-ui/core/Grid';
import SendMessageButton from './SendMessageButton';
import MessageAutoComplete from './MessageInputAutoComplete';
import ChatInstructions from './ChatInstructions';

export default function MessageInput({ setMessage, instructionOpen, handleOpen, handleClose }) {
    return (
        <Grid 
            container 
            spacing={1} 
            justifyContent="center" 
            alignItems="center" 
            style={{
                position: 'sticky', 
                top: 10, 
                zIndex: 1,
                padding: 10,
                borderRadius: 10,
                background: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
                backdropFilter: 'blur(10px)', // Apply blur to the backdrop
                WebkitBackdropFilter: 'blur(10px)',
            }}
        >
            <Grid item xs={8}>
                <MessageAutoComplete setMessage={setMessage}/>
            </Grid>
            <Grid item xs={"auto"}>
                <SendMessageButton />
            </Grid>
            <Grid item xs={"auto"}>
                <ChatInstructions open={instructionOpen} handleOpen={handleOpen} handleClose={handleClose}/>
            </Grid>
        </Grid>
    );
}
