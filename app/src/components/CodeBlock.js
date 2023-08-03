import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import graphql from 'react-syntax-highlighter/dist/cjs/languages/prism/graphql';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

SyntaxHighlighter.registerLanguage('graphql', graphql);

export default function CodeBlock(props) {
    const handleCopyCode = async () => {
        try {
            await navigator.clipboard.writeText(props.code);
            console.log('Copying to clipboard was successful!');
        } catch (err) {
            console.error('Could not copy text: ', err);
        }
    };
    

  return (
    <div>
        <Grid container direction="row" alignItems="center" spacing={{xs: 0}}>
            <Grid container direction="row" alignItems="center">
                <Grid item>
                    <Tooltip title="Copy to clipboard">
                    <IconButton color="primary" size="small" onClick={handleCopyCode}>
                        <FileCopyIcon fontSize="inherit" />
                    </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <p style={{margin: 0, marginLeft: 5}}>
                        Try on the <Link href='https://api.platform.opentargets.org/api/v4/graphql/browser'>
                        OpenTargets API Playground</Link>
                    </p>
                </Grid>
            </Grid>
        </Grid>
        <Grid style={{maxWidth: '100%'}}>
            <SyntaxHighlighter 
                language="graphql" 
                style={oneDark}>
                {props.code}
                borderRadius={30}
                fontSize={10}
            </SyntaxHighlighter>
        </Grid>
    </div>
  );
}
