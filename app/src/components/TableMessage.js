// TableMessage.js
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

export default function TableMessage({ tableString }) {
    const rows = tableString.split('\n').filter(row => !row.includes('---')).map(row => row.split('|'));

    return (
        <TableContainer style={{maxWidth: '100%'}} component={Paper}>
            <Table aria-label="a dense table" padding='0 1rem'>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
