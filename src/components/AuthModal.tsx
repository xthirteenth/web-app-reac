import React, { useState } from 'react';
import '../styles/AuthModal.css';

interface AuthModalProps {
  onAuth: (success: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика проверки с базой данных
    // Пока просто имитируем успешную авторизацию
    if (username && password) {
      onAuth(true);
    }
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <h2>Авторизация</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Логин"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              required
            />
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal; 