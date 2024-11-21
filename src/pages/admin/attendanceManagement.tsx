import React, { useState, useEffect } from 'react';
import { getAttendance, markAttendance } from '../../api/attendanceService';

const AttendanceManagement: React.FC = () => {
  const [attendance, setAttendance] = useState<any[]>([]);
  const [attendanceStatus, setAttendanceStatus] = useState<string>('present'); // Default status
  const [employeeId, setEmployeeId] = useState<string>(''); // Store employee ID

  useEffect(() => {
    const fetchAttendance = async () => {
      const attendanceData = await getAttendance();
      setAttendance(attendanceData);
    };
    fetchAttendance();
  }, []);

  const handleRecordAttendance = async (employeeId: string) => {
    if (!attendanceStatus || !employeeId) {
      return; // Prevent empty status or employeeId submission
    }

    // Mark the attendance
    const attendanceData = { employeeId, status: attendanceStatus };
    const updatedAttendance = await markAttendance(attendanceData);

    // Update local state
    setAttendance([...attendance, updatedAttendance]);
  };

  return (
    <div>
      <h2>Attendance Management</h2>
      
      {/* Attendance List */}
      <ul>
        {attendance.map(item => (
          <li key={item.employeeId}>
            Employee {item.employeeId}: {item.status}
          </li>
        ))}
      </ul>

      {/* Input for Employee ID and Attendance Status */}
      <input 
        type="text" 
        value={employeeId} 
        onChange={(e) => setEmployeeId(e.target.value)} 
        placeholder="Employee ID" 
      />
      <select 
        value={attendanceStatus} 
        onChange={(e) => setAttendanceStatus(e.target.value)} 
      >
        <option value="present">Present</option>
        <option value="absent">Absent</option>
        <option value="leave">Leave</option>
      </select>
      
      <button onClick={() => handleRecordAttendance(employeeId)}>Record Attendance</button>
    </div>
  );
};

export default AttendanceManagement;
