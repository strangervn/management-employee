import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../../api/employeeService';

const Register: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useNavigate();

  const handleRegister = async () => {
    const employeeData = { name, email, password };
    await addEmployee(employeeData);
    history('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Name" 
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
