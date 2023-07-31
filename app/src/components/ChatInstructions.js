import React from 'react';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import InfoIconButton from './InfoIconButton';
import Box from '@mui/material/Box';

export default function ChatInstructions({ open, handleOpen, handleClose }) {
    return (
        <>
            <InfoIconButton handleOpen={handleOpen} />
            <Dialog open={open} onClose={handleClose} PaperProps={{
                style: {
                    background: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
                    WebkitBackdropFilter: 'blur(20px)',
                    backdropFilter: 'blur(20px)', // Apply blur to the backdrop
                }
            }}>
                <DialogTitle>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5">OpenTargets Query Assistant</Typography>
                        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                    This assistant leverages OpenAI&apos;s <a href="https://platform.openai.com/docs/guides/gpt" target="_blank">GPT-3.5-Turbo</a> model to learn the <a href="https://platform.opentargets.org/api" target="_blank">OpenTargets GraphQL API</a> and develop intelligent queries against their database.
                    </Typography><br></br>

                    <Typography variant="h6">
                        How To Get Started
                    </Typography>
                    <Typography variant="body1">
                        Think about the information you want to retrieve. This could be about associations, drugs, diseases, targets, or clinical symptoms related to a specific gene, disease, or drug. 
                    </Typography><br></br>
                    
                    <Typography variant="h6">
                        Enter Your Query
                    </Typography>
                    <Typography variant="body1">
                        {"Start by asking a question in natural language. For instance, 'Find all drugs for BRCA1' or 'Search for all information on insulin'."}
                    </Typography><br></br>
                    
                    <Typography variant="h6">
                        Get Your Results
                    </Typography>
                    <Typography variant="body1">
                        {"Submit your question, and the assistant will transform your question into a GraphQL query and interpret the corresponding results."}
                    </Typography><br></br>

                    <Typography variant="captiontext">
                    Check out the project source code on <a href="https://github.com/foadgr/chatGPT-for-genetics" target="_blank">GitHub</a> <br></br>
                    Made by <a href="https:www.foadgreen.com" target="_blank">@foadgr</a>
                    </Typography><br></br>
                </DialogContent>
            </Dialog>
        </>
    );
}
