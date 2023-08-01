import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import fetch from 'isomorphic-unfetch';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function Chat() {
    const [message, setMessage] = useState('');
    const [chatStarted, setChatStarted] = useState(false);
    const [instructionOpen, setInstructionOpen] = useState(true);
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
            setInstructionOpen(false);
            try {
                setMessages([...messages, { text: message, isUser: true }]);
                const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
                const chatEndpoint = `${backendUrl}/chat`;
                const res = await fetch(chatEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: message })
                });
                const data = await res.json();
                setMessages((prevMessages) => [...prevMessages, { text: data.response, isUser: false }]);
                setMessage('');
                setChatStarted(true);
            } catch (error) {
                console.error("Error sending message: ", error);
                setMessages((prevMessages) => [...prevMessages, { text: "Error sending message. Please try again later.", isUser: false }]);
            }
        }
    };

    const handleOpen = () => {
        setInstructionOpen(true);
    };

    const handleClose = () => {
        setInstructionOpen(false);
    };

    return (
        <Grid
            container
            direction="column"
            style={{
                maxWidth: 800,
                margin: "auto",
                height: "100vh",
            }}
        >
            <form onSubmit={handleSendMessage}>
                <MessageInput setMessage={setMessage} instructionOpen={instructionOpen} handleOpen={handleOpen} handleClose={handleClose} />
                <MessageList messages={messages} />
            </form>
        </Grid>
    );
}
