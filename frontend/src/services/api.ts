import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Auth
export const login = async (username: string, password: string) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};

// Employee
export const createEmployee = async (data: any) => {
  const response = await api.post('/employees', data);
  return response.data;
};

export const getEmployees = async () => {
  const response = await api.get('/employees');
  return response.data;
};

// Salary
export const createSalary = async (data: any) => {
  const response = await api.post('/salaries', data);
  return response.data;
};

export const getSalaries = async () => {
  const response = await api.get('/salaries');
  return response.data;
};

// Attendance
export const clockIn = async (data: any) => {
  const response = await api.post('/attendances', data);
  return response.data;
};

export const getAttendances = async () => {
  const response = await api.get('/attendances');
  return response.data;
};

// Department
export const createDepartment = async (data: any) => {
  const response = await api.post('/departments', data);
  return response.data;
};

export const getDepartments = async () => {
  const response = await api.get('/departments');
  return response.data;
};
