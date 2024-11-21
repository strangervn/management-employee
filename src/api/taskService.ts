import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks/';

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const assignTask = async (employeeId: string, taskId: string) => {
  const response = await axios.post(`${API_URL}assign`, { employeeId, taskId });
  return response.data;
};
