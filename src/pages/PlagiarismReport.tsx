import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';

const PlagiarismReport = () => {
    return (
        <Stack spacing={3}>
            <Typography variant="h4">Отчет о плагиате</Typography>
            <Typography color="error.main" fontWeight={700}>Обнаружен плагиат: 95%</Typography>

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" fontWeight={600}>Код студента C.</Typography>
                            <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', mt: 1 }}>
                                {`def calc(a, b):
    if a > 0:
        return a + b
    else:
        return a - b`}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" fontWeight={600}>Код студента И.</Typography>
                            <Typography component="pre" sx={{ whiteSpace: 'pre-wrap', mt: 1 }}>
                                {`def calc(x, y):
    if x > 0:
        return x + y
    else:
        return x - y`}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Card>
                <CardContent>
                    <Typography>Обнаружено заимствование кода. Совпадение 95% с работой студента C.</Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                        <Button variant="outlined">Редактировать</Button>
                        <Button variant="contained">Отправить студенту</Button>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default PlagiarismReport;
