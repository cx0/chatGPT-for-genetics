// TableComponent.js
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

export default function TableMessage({ tableString }) {
    const rows = tableString.split('\n').filter(row => !row.includes('---')).map(row => row.split('|'));

    return (
        <TableContainer component={Paper}>
            <Table max-width={300} aria-label="a dense table" size="small">
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
