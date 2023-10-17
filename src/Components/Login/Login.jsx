import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      alert('Please fill out all fields');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (email === 'admin@gmail.com' && password === 'password') {
        alert('Login Successful!');
        navigate('/admin'); // Use history.push for navigation
      } else {
        alert('Invalid email or Password');
      }
    }, 2000);
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
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </div>
        </div>
        <div className='container-1'></div>
      </div>
    </section>
  );
}

export default Login;
