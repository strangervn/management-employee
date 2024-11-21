import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/admin/employees">Manage Employees</Link></li>
          <li><Link to="/admin/tasks">Manage Tasks</Link></li>
          <li><Link to="/admin/salaries">Manage Salaries</Link></li>
          <li><Link to="/admin/attendance">Manage Attendance</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
