import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography } from '@mui/material';

export default function TableMessage({ tableString }) {
    const rows = tableString.split('\n').filter(row => !row.includes('---')).map(row => row.split('|'));

    return (
        <TableContainer component={Paper}>
            <Table aria-label="a dense table" padding='0 1rem'>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex}>
                                    <Typography variant="body2">
                                        {cell}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
