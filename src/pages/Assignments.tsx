import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { assignments } from '../data/mockData';

const Assignments = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4">Раздел "Задания"</Typography>
                <Button variant="contained" onClick={() => setOpen(true)}>+ Создать задание</Button>
            </Stack>

            <Grid container spacing={2}>
                {assignments.map((assignment) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={assignment.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{assignment.title}</Typography>
                                <Typography color="text.secondary">{assignment.topic}</Typography>
                                <Typography color="text.secondary">Сдано: {assignment.submitted}/{assignment.total}</Typography>
                                <Button sx={{ mt: 2 }} onClick={() => navigate(`/assignments/${assignment.id}`)}>Открыть</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>Создание задания</DialogTitle>
                <DialogContent>
                    <Stack spacing={2} sx={{ mt: 1 }}>
                        <TextField label="Название задания" defaultValue="Лабораторная работа №3" fullWidth />
                        <TextField select label="Язык программирования" defaultValue="Python">
                            <MenuItem value="Python">Python</MenuItem>
                            <MenuItem value="JavaScript">JavaScript</MenuItem>
                            <MenuItem value="Java">Java</MenuItem>
                            <MenuItem value="C++">C++</MenuItem>
                        </TextField>
                        <TextField type="date" label="Дедлайн" InputLabelProps={{ shrink: true }} defaultValue="2026-04-30" />
                        <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
                            <Typography variant="body2">Эталонное решение: `solution.py`</Typography>
                            <Typography variant="body2">Юнит-тесты: `test_lab3.py`</Typography>
                        </Box>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Отмена</Button>
                    <Button variant="contained" onClick={() => setOpen(false)}>Создать</Button>
                </DialogActions>
            </Dialog>
        </Stack>
    );
};

export default Assignments;
