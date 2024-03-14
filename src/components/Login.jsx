import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    const defaultEmail = 'Team6@gmail.com';
    const defaultPassword = 'Team6';

    if (email === defaultEmail && pass === defaultPassword) {
      localStorage.setItem('authenticated', 'true');


      alert('Login successful');

    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2> <br/>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="email"> Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder='your email'
          id="email"
          name="email"
        />
        <label htmlFor="pw">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="pw"
          name="pw"
        />
        <button type="submit">Log In</button>
      </form>

      <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>
        Don't have an account? SignUp here.
      </button>
    </div>
  );
};

export default Login;
