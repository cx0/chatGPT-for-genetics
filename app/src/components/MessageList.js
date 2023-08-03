import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Message from './Message';

export default function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages]);

  return (
    <Grid container 
      direction="column" 
      justifyContent="flex-end"
      style={{ marginTop: '100px', paddingBottom: '100px'}} 
    >
      {messages.map((message, index) => (
        <Grid item key={index} container justifyContent={message.isUser ? 'flex-end' : 'flex-start'}>
          <Message message={message} />
        </Grid>
      ))}
      <div ref={messagesEndRef} />
    </Grid>
  );
}
