import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0b81ff',
    color: '#fff',
    borderRadius: '10px 0px 10px 10px',
    maxWidth: '90%',
    margin: '10px',
    padding: '20px',
    wordBreak: 'break-word',
    textAlign: 'right',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f3f3f3',
    borderRadius: '0px 10px 10px 10px',
    maxWidth: '90%',
    margin: '10px',
    padding: '20px',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
  },
}));


export default function Message({ message }) {
  const classes = useStyles();

  return (
    <Paper className={message.isUser ? classes.userMessage : classes.botMessage}>
      <Typography variant="body1">
        {message.text}
      </Typography>
    </Paper>
  );
}
