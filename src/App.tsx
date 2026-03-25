<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login.tsx'
import Register from './components/Register.tsx'
import Dashboard from './components/Dashboard.tsx'
import Courses from './components/Courses.tsx'
import CourseDetail from './components/CourseDetail.tsx'
import Groups from './components/Groups.tsx'
import GroupDetail from './components/GroupDetail.tsx'
import Students from './components/Students.tsx'
import StudentDetail from './components/StudentDetail.tsx'
import Assignments from './components/Assignments.tsx'
import AssignmentDetail from './components/AssignmentDetail.tsx'
import Submissions from './components/Submissions.tsx'
import SubmissionDetail from './components/SubmissionDetail.tsx'
import PlagiarismReport from './components/PlagiarismReport.tsx'
import TestResults from './components/TestResults.tsx'
import GradeJournal from './components/GradeJournal.tsx'
import AdminStatistics from './components/AdminStatistics.tsx'
import NotFound from './components/NotFound.tsx'
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import Groups from './components/Groups';
import GroupDetail from './components/GroupDetail';
import Students from './components/Students';
import StudentDetail from './components/StudentDetail';
import Assignments from './components/Assignments';
import AssignmentDetail from './components/AssignmentDetail';
import Submissions from './components/Submissions';
import SubmissionDetail from './components/SubmissionDetail';
import PlagiarismReport from './components/PlagiarismReport';
import TestResults from './components/TestResults';
import GradeJournal from './components/GradeJournal';
import AdminStatistics from './components/AdminStatistics';
import NotFound from './components/NotFound';
>>>>>>> d8cd61f (feat: add routing, stub pages)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичные маршруты */}
<<<<<<< HEAD
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Приватные маршруты (требуют аутентификации) */}
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:courseId' element={<CourseDetail />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/groups/:groupId' element={<GroupDetail />} />
          <Route path='/students' element={<Students />} />
          <Route path='/students/:studentId' element={<StudentDetail />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path='/assignments/:assignmentId' element={<AssignmentDetail />} />
          <Route path='/submissions' element={<Submissions />} />
          <Route path='/submissions/:submissionId' element={<SubmissionDetail />} />
          <Route path='/submissions/:submissionId/plagiarism' element={<PlagiarismReport />} />
          <Route path='/submissions/:submissionId/test-results' element={<TestResults />} />
          <Route path='/assignments/:assignmentId/journal' element={<GradeJournal />} />
        </Route>

        {/* Административные маршруты (только ADMIN) */}
        <Route element={<PrivateRoute requiredRole='ADMIN' />}>
          <Route path='/admin/statistics' element={<AdminStatistics />} />
        </Route>

        {/* 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
=======
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Приватные маршруты (требуют аутентификации) */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/:groupId" element={<GroupDetail />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:studentId" element={<StudentDetail />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/assignments/:assignmentId" element={<AssignmentDetail />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/submissions/:submissionId" element={<SubmissionDetail />} />
          <Route path="/submissions/:submissionId/plagiarism" element={<PlagiarismReport />} />
          <Route path="/submissions/:submissionId/test-results" element={<TestResults />} />
          <Route path="/assignments/:assignmentId/journal" element={<GradeJournal />} />
        </Route>

        {/* Административные маршруты (только ADMIN) */}
        <Route element={<PrivateRoute requiredRole="ADMIN" />}>
          <Route path="/admin/statistics" element={<AdminStatistics />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> d8cd61f (feat: add routing, stub pages)
}

export default App;