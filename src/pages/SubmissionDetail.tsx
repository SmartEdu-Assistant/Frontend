import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';

const SubmissionDetail = () => {
    const navigate = useNavigate();
    const { submissionId } = useParams();
    const isPlagiarismCase = submissionId === 's4';

    return (
        <Stack spacing={3}>
            <Typography variant="h4">
                {isPlagiarismCase ? 'Детали плагиата' : 'Детали успешной работы'}
            </Typography>

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Результаты тестов</Typography>
                            <Typography>test_calc_positive: пройден</Typography>
                            <Typography>test_calc_negative: пройден</Typography>
                            <Typography>test_calc_zero: пройден</Typography>
                            <Typography>test_calc_large: пройден</Typography>
                            <Typography sx={{ mt: 2, fontWeight: 600 }}>Оценка: {isPlagiarismCase ? '2' : '100%'}</Typography>
                            <Button sx={{ mt: 2 }} onClick={() => navigate(`/submissions/${submissionId}/test-results`)}>
                                Подробные результаты
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Комментарии преподавателя</Typography>
                            <TextField
                                multiline
                                minRows={5}
                                fullWidth
                                defaultValue={
                                    isPlagiarismCase
                                        ? 'Обнаружено заимствование кода. Совпадение 95% с работой другого студента.'
                                        : 'Хорошая работа. Можно добавить обработку граничных случаев.'
                                }
                                sx={{ mt: 1 }}
                            />
                            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                                <Button variant="outlined">Сохранить</Button>
                                {isPlagiarismCase && (
                                    <Button variant="contained" onClick={() => navigate(`/submissions/${submissionId}/plagiarism`)}>
                                        Отчет о плагиате
                                    </Button>
                                )}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default SubmissionDetail;
