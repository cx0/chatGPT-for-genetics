import React from 'react';
import Grid from '@material-ui/core/Grid';
import Message from './Message';

export default function MessageList({ messages }) {
  return (
    <Grid container 
      direction="column" 
      justifyContent="flex-end"
      style={{ marginTop: '50px' }} 
    >
      {messages.map((message, index) => (
        <Grid item key={index} container justifyContent={message.isUser ? 'flex-end' : 'flex-start'}>
          <Message message={message} />
        </Grid>
      ))}
    </Grid>
  );
}
