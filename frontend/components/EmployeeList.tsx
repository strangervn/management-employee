import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Employee {
  _id: string;
  name: string;
  department: string;
  salary: number;
}

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get('/api/employees', config);
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp._id}>{emp.name} - {emp.department}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
