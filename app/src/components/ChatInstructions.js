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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <Box display="flex" justifyContent="space-between" alignItems="center" >
                        <Typography variant="h5" sx={{ fontWeight: "medium", m: 1 }}>Open Targets<br></br>AI Query Assistant</Typography>
                        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon color="primary" />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" sx={{ fontWeight: 20, m: 1 }}>
                    This assistant leverages OpenAI&apos;s <a href="https://platform.openai.com/docs/guides/gpt" target="_blank">GPT-3.5-Turbo</a> model to learn the <a href="https://platform.opentargets.org/" target="_blank">Open Targets</a> GraphQL API and develop intelligent queries against their database.
                    </Typography><br></br>

                    <Typography variant="h6">
                        How To Get Started
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 10, m: 1 }}>
                        Think about the information you want to retrieve. This could be about associations of drugs, diseases, targets, or clinical symptoms related to a specific gene, disease, or drug. 
                    </Typography>
                    
                    <Typography variant="h6" >
                        Enter Your Query
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 10, m: 1 }}>
                        {"Start by asking a question in natural language. For instance, 'Find all drugs for BRCA1' or 'Search for all information on insulin'."}
                    </Typography>
                    
                    <Typography variant="h6">
                        Get Your Results
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 10, m: 1 }}>
                        {"Submit your question, and the assistant will transform your question into a GraphQL query and interpret the corresponding results."}
                    </Typography><br></br>

                    <Typography variant="captiontext">
                    Made by <a href="https:www.foadgreen.com" target="_blank">@foadgr</a>
                    </Typography>
                </DialogContent>
            </Dialog>
        </>
    );
}
