import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function MessageAutoComplete({ setMessage }) {
    const exampleQuestions = [
        "What diseases are associated with the gene CAV1?", 
        "Which diseases are associated with the drug pembrolizumab?", 
        "Which are the top two targets associated with Idiopathic Pulmonary Fibrosis?", 
        "What information do you have on insulin?"
    ];

    return (
        <Autocomplete
            id="example-questions"
            options={exampleQuestions}
            freeSolo
            onInputChange={(event, newInputValue) => {
                setMessage(newInputValue);
            }}
            renderInput={(params) => (
                <TextField {...params} label="Enter message" variant="standard" fullWidth />
            )}
        />
    );
}
