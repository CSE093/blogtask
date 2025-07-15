import { useState } from 'react';
import { useRouter } from 'next/router';
import './login.css'; 

export default function LoginPage() {
  const [role, setRole] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (role === 'admin' && username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin');
    } else if (role === 'user' && username === 'user' && password === 'user123') {
      localStorage.setItem('isAdmin', 'false');
      router.push('/user');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login Portal</h1>
      <p>Select your role:</p>

      <select
        className="role-select"
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
          setError('');
        }}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <input
        className="input-field"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          setError('');
        }}
      />

      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError('');
        }}
      />

      {error && <p className="error-message">{error}</p>}

      <button className="login-button" onClick={handleLogin}>
        Login as {role}
      </button>
    </div>
  );
}
