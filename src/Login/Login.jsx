import React, { useState } from 'react';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submit logic here


    
  };

  return (
    <section>
      <div className='container'>
        <div className='container-1' id='creden-con'>
          <div className='login-container'>
            <div className='container-input'>
              <p>Username</p>
              <input
                type='email'
                name='email'
                placeholder='email...'
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='container-input'>
              <p>Password</p>
              <input
                type='password'
                name='password'
                placeholder='password..'
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button className='login-button' onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
        <div className='container-1'></div>
      </div>
    </section>
  );
}

export default Login;

