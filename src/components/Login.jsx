import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const user = props.signUpData.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('authenticated', 'true');
      console.log('Login successful');
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password. Please check your credentials.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2> <br/>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="email"> Email</label>
        <input value={formData.email} onChange={handleChange} type="email"  placeholder='your email' id="email" name="email"/>
        <label htmlFor="pw">Password</label>
        <input value={formData.password} onChange={handleChange} type="password" placeholder="********" id="pw" name="password"/>
        <button type="submit">Log In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <button className="link-btn" onClick={goToSignUp}>
        Don't have an account? SignUp here.
      </button>
    </div>
  );
};

export default Login;
