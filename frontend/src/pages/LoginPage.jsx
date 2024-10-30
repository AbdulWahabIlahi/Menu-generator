import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const toggleForm = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Logging in' : 'Signing up', { email, password, name });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <p>{isLogin ? 'Welcome back!' : 'Create your account'}</p>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">wahab</label>
              <input
                id="name"
                type="text"
                placeholder="Wahab Ilahi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="wahab@wahab.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button type="submit" className="submit-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="toggle-form">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={toggleForm}>
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
          padding: 1rem;
        }
        .auth-card {
          width: 100%;
          max-width: 450px;
          background-color: #111;
          color: white;
          padding: 2.5rem;
          border-radius: 10px;
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
        }
        h2 {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1rem;
        }
        p {
          text-align: center;
          color: #888;
          font-size: 1.125rem;
          margin-bottom: 2rem;
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        label {
          display: block;
          margin-bottom: 0.75rem;
          color: #ccc;
          font-size: 1.125rem;
        }
        input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #333;
          background-color: #222;
          color: white;
          border-radius: 6px;
          font-size: 1rem;
        }
        .password-input {
          position: relative;
        }
        .password-toggle {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #888;
          font-size: 0.875rem;
          cursor: pointer;
        }
        .submit-button {
          width: 100%;
          padding: 1rem;
          background-color: #8b5cf6;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1.125rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .submit-button:hover {
          background-color: #7c3aed;
        }
        .toggle-form {
          margin-top: 1.5rem;
          font-size: 1rem;
          text-align: center;
        }
        .toggle-form button {
          background: none;
          border: none;
          color: #8b5cf6;
          font-size: 1rem;
          cursor: pointer;
          margin-left: 0.25rem;
        }
        .toggle-form button:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
