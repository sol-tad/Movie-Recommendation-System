import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = formData;
    if (!email || !password || !name) {
      setErrorMessage('Please fill out all fields');
    } else {
      props.onSignUp(formData); 
      console.log('Signup successful');
      navigate('/home');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='auth-form-container'>
        <h2 >Sign Up</h2> <br/>

    <form className="signup" onSubmit={handleSubmit} >
        <label htmlFor="nam">Full Name</label>
        <input value={formData.name} onChange={handleChange} type="text" name="name" id="nam" placeholder='Full Name'/>
        <label htmlFor="email"> Email</label>
        <input value={formData.email} onChange={handleChange} type="email" placeholder='your email' id="email" name="email"/>
        <label htmlFor="pw">Password</label> 
        <input value={formData.password} onChange={handleChange} type="password" placeholder="********" id="pw" name="password"/>

        <button type="submit" >Sign Up</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
    </div>
  );
};

export default SignUp;
