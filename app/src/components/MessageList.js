import React from 'react';
import Grid from '@material-ui/core/Grid';
import Message from './Message';

export default function MessageList({ messages }) {
  return (
    <Grid container direction="column" justify="flex-end" alignItems="stretch" spacing={2}>
      {messages.map((message, index) => (
        <Grid item key={index}>
          <Message message={message} />
        </Grid>
      ))}
    </Grid>
  );
}
