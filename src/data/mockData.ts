export interface Course {
    id: string;
    title: string;
    progress: number;
    assignmentsTotal: number;
}

export interface AssignmentSummary {
    id: string;
    title: string;
    topic: string;
    submitted: number;
    total: number;
    language: string;
    deadline: string;
}

export interface SubmissionSummary {
    id: string;
    student: string;
    tests: number;
    status: 'passed' | 'failed' | 'plagiarism';
}

export const courses: Course[] = [
    { id: 'c1', title: 'Основы программирования на Python', progress: 65, assignmentsTotal: 5 },
    { id: 'c2', title: 'Алгоритмы и структуры данных', progress: 42, assignmentsTotal: 6 },
];

export const assignments: AssignmentSummary[] = [
    {
        id: 'a1',
        title: 'Лабораторная работа №1',
        topic: 'Основы синтаксиса',
        submitted: 15,
        total: 20,
        language: 'Python',
        deadline: '2026-04-27',
    },
    {
        id: 'a2',
        title: 'Лабораторная работа №2',
        topic: 'Условные операторы',
        submitted: 12,
        total: 20,
        language: 'Python',
        deadline: '2026-05-04',
    },
];

export const submissions: SubmissionSummary[] = [
    { id: 's1', student: 'Иванов А.', tests: 100, status: 'passed' },
    { id: 's2', student: 'Петров В.', tests: 92, status: 'passed' },
    { id: 's3', student: 'Сидоров К.', tests: 0, status: 'failed' },
    { id: 's4', student: 'Ивлев И.', tests: 95, status: 'plagiarism' },
];

export const gradeRows = [
    { student: 'Иванов А.', tests: '100%', grade: 5 },
    { student: 'Петров В.', tests: '92%', grade: 5 },
    { student: 'Сидоров К.', tests: 'ошибка', grade: 2 },
    { student: 'Ивлев И.', tests: 'плагиат', grade: 2 },
    { student: 'Смирнова О.', tests: '85%', grade: 4 },
];

export const teachers = [
    { id: 't1', name: 'Иванова Мария Сергеевна', course: 'Python, Алгоритмы', status: 'Активен' },
    { id: 't2', name: 'Петров Сергей Викторович', course: 'JavaScript, HTML/CSS', status: 'Активен' },
    { id: 't3', name: 'Сидоров Иван Андреевич', course: 'Базы данных', status: 'Заблокирован' },
];
