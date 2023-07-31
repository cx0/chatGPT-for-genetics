import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function MessageAutoComplete({ setMessage }) {
    const exampleQuestions = [
        "Which diseases are associated with the gene CAV1?", 
        "Find the top 5 diseases associated with the drug pembrolizumab?", 
        "Show scores for the top two targets associated with Idiopathic Pulmonary Fibrosis?", 
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
                <TextField {...params} 
                    placeholder="Ask me a question..."
                    label="Welcome to OpenTargets AI Query Service" 
                    variant="outlined"
                />
            )}
            clearOnEscape
        />
    );
}