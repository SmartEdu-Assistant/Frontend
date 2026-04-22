import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Groups from './pages/Groups';
import GroupDetail from './pages/GroupDetail';
import Students from './pages/Students';
import StudentDetail from './pages/StudentDetail';
import Assignments from './pages/Assignments';
import AssignmentDetail from './pages/AssignmentDetail';
import Submissions from './pages/Submissions';
import SubmissionDetail from './pages/SubmissionDetail';
import PlagiarismReport from './pages/PlagiarismReport';
import TestResults from './pages/TestResults';
import GradeJournal from './pages/GradeJournal';
import AdminStatistics from './pages/AdminStatistics';
import NotFound from './pages/NotFound';

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Публичные маршруты (без Layout) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Все приватные маршруты внутри Layout с AppBar */}
            <Route element={<Layout />}>
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

              <Route element={<PrivateRoute requiredRole="ADMIN" />}>
                <Route path="/admin/statistics" element={<AdminStatistics />} />
              </Route>
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;