import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Logout: React.FC = () => {
  const { logout } = useAuth();
  const history = useNavigate();

  const handleLogout = () => {
    logout();
    history('/login'); // Sau khi đăng xuất, chuyển về trang đăng nhập
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
