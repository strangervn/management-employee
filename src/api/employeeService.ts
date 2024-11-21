import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees/';

export const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getEmployeeById = async (id: string) => {
  const response = await axios.get(`${API_URL}${id}`);
  return response.data;
};
export const addEmployee = async (employeeData: { name: string; email: string; password: string }) => {
  const response = await axios.post(API_URL, employeeData);
  return response.data;
};