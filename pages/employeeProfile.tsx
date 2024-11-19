import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployees } from '../services/api';

const EmployeeProfile: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState(0);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleAddEmployee = async () => {
    const newEmployee = await createEmployee({ name, position, department, salary });
    setEmployees([...employees, newEmployee]);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Quản lý hồ sơ nhân viên</h2>
      <input type="text" placeholder="Tên" onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Chức vụ" onChange={(e) => setPosition(e.target.value)} />
      <input type="text" placeholder="Phòng ban" onChange={(e) => setDepartment(e.target.value)} />
      <input type="number" placeholder="Lương" onChange={(e) => setSalary(Number(e.target.value))} />
      <button onClick={handleAddEmployee}>Thêm nhân viên</button>

      <h3>Danh sách nhân viên</h3>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position} - {employee.department} - {employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeProfile;
