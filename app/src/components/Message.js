import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import TableMessage from './TableMessage';
import CodeBlock from './CodeBlock';

const useStyles = makeStyles({
  userMessage: {
    alignSelf: 'center',
    backgroundColor: '#0b81ff',
    color: '#fff',
    borderRadius: '10px 10px 10px 10px',
    maxWidth: '100%',
    margin: '5px',
    padding: '10px',
    wordBreak: 'break-word',
    textAlign: 'left',
  },
  botMessage: {
    alignSelf: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: '10px 10px 10px 10px',
    maxWidth: '900%',
    margin: '5px',
    padding: '10px',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
  },
});

export default function Message({ message }) {
  const classes = useStyles();
  const messageParts = message.text.split('\n');
  const isTable = messageParts.some(part => part.includes('|'));
  const isCode = message.isSuggestion;
  let tableString = '';
  let precedingText = '';

  if (isTable) {
    const tableStartIndex = messageParts.findIndex(part => part.includes('|'));
    precedingText = messageParts.slice(0, tableStartIndex).join('\n');
    tableString = messageParts.slice(tableStartIndex).join('\n');
  }

  return (
    <Paper className={message.isUser ? classes.userMessage : classes.botMessage}>
      {isTable ? (
        <>
          <Typography variant="body1">{precedingText}</Typography>
          <TableMessage tableString={tableString} />
        </>
      ) : isCode ? (
        <CodeBlock code={message.text} />
      ) : (
        <Typography variant="body1">
          {message.text}
        </Typography>
      )}
    </Paper>
  );
}
