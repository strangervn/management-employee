import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from './context/authContext';
import AdminDashboard from './pages/admin/admin';
import EmployeeDashboard from './pages/employee/employee';
import EmployeeManagement from './pages/admin/employeeManagement';
import TaskManagement from './pages/admin/taskManagement';
import SalaryManagement from './pages/admin/salaryManagement';
import AttendanceManagement from './pages/admin/attendanceManagement';
import TaskOverview from './pages/employee/taskOverview';
import Salary from './pages/employee/salary';
import Attendance from './pages/employee/attendance';
import TaskReport from './pages/employee/taskReport';

const App: React.FC = () => {
  const  user  = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* Route dành cho Admin */}
        {user?.role === 'admin' && (
          <>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/employee-management" element={<EmployeeManagement />} />
            <Route path="/admin/task-management" element={<TaskManagement />} />
            <Route path="/admin/salary-management" element={<SalaryManagement />} />
            <Route path="/admin/attendance-management" element={<AttendanceManagement />} />
          </>
        )}

        {/* Route dành cho Nhân viên */}
        {user?.role === 'employee' && (
          <>
            <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
            <Route path="/employee/task-list" element={<TaskOverview />} />
            <Route path="/employee/salary" element={<Salary />} />
            <Route path="/employee/attendance" element={<Attendance />} />
            <Route path="/employee/report" element={<TaskReport />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
