import axios from 'axios';

const API_URL = 'http://localhost:5000/api/salaries/';

export const getSalaries = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateSalary = async (employeeId: string, salary: number) => {
  const response = await axios.put(`${API_URL}${employeeId}`, { salary });
  return response.data;
};
