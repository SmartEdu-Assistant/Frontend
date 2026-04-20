import { useState } from 'react';
import { Button, Card, CardContent, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { gradeRows } from '../data/mockData';

const GradeJournal = () => {
    const [rows, setRows] = useState(gradeRows);
    const average = (rows.reduce((acc, row) => acc + row.grade, 0) / rows.length).toFixed(1);

    return (
        <Stack spacing={3}>
            <Typography variant="h4">Журнал оценок</Typography>
            <Card>
                <CardContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Студент</TableCell>
                                <TableCell>Тесты</TableCell>
                                <TableCell>Оценка</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.student}>
                                    <TableCell>{row.student}</TableCell>
                                    <TableCell>{row.tests}</TableCell>
                                    <TableCell width={140}>
                                        <TextField
                                            size="small"
                                            type="number"
                                            value={row.grade}
                                            onChange={(event) => {
                                                const nextGrade = Number(event.target.value);
                                                setRows((prev) =>
                                                    prev.map((current) =>
                                                        current.student === row.student ? { ...current, grade: nextGrade } : current,
                                                    ),
                                                );
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Typography variant="h6">Средний балл: {average}</Typography>
            <Stack direction="row" spacing={1}>
                <Button variant="outlined">Редактировать</Button>
                <Button variant="contained">Опубликовать</Button>
            </Stack>
        </Stack>
    );
};

export default GradeJournal;
