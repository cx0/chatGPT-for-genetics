import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import fetch from 'isomorphic-unfetch';
import MessageList from './MessageList';
import SendMessageButton from './SendMessageButton';
import MessageAutoComplete from './MessageAutoComplete';

export default function ChatInput() {
    const [message, setMessage] = useState('');
    const [chatStarted, setChatStarted] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
            try {
                setMessages([...messages, { text: message, isUser: true }]);
                const res = await fetch('http://localhost:5001/chat', {
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

    return (
        <div className="container">
            <MessageList messages={messages} />
            <form onSubmit={handleSendMessage}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item xs={10}>
                        <MessageAutoComplete setMessage={setMessage} />
                    </Grid>
                    <Grid item xs={2}>
                        <SendMessageButton />
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
