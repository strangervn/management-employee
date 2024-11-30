import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import AuthContext from './context/authContext'; // Import AuthProvider

createRoot(document.getElementById('root')!).render(
  <AuthContext>
    <App />
  </AuthContext>
)
